<script>
	import { beforeUpdate, afterUpdate } from 'svelte';
	import { highlight } from '../../utils.js';

	export let step;

	let scroller;
	let scrollTop = 0;

	beforeUpdate(() => {
		if (scroller) {
			scrollTop = scroller.firstElementChild.scrollTop;
		}
	});

	afterUpdate(() => {
		if (scroller) {
			scroller.firstElementChild.scrollTop = scrollTop;
		}
	});

	const react = `
		import React, { useState } from 'react';

		export default function TodoList() {
			const [todos, setTodos] = useState([
				{ done: false, text: 'eat' },
				{ done: false, text: 'sleep' },
				{ done: false, text: 'code' },
				{ done: false, text: 'repeat' }
			]);

			function toggleDone(t) {
				setTodos(todos.map(todo => {
					if (todo === t) return { done: !t.done, text: t.text };
					return todo;
				}));
			}

			const [hideDone, setHideDone] = useState(false);

			function toggleHideDone() {
				setHideDone(!hideDone);
			}

			/*FILTERED*/

			return (
				<div>
					<label>
						<input
							type="checkbox"
							checked={hideDone}
							onChange={toggleHideDone}
						></input>

						hide done
					</label>

					<ul>
						{filtered.map(todo => (
							<li onClick={() => toggleDone(todo)}>
								{todo.done ? '👍' : ''} {todo.text}
							</li>
						))}
					</ul>
				</div>
			);
		}`;

	const naive = react.replace('/*FILTERED*/', `const filtered = hideDone
				? todos.filter(todo => !todo.done)
				: todos;`);

	const memoised = react.replace('/*FILTERED*/', `const filtered = useMemo(
				() => hideDone
					? todos.filter(todo => !todo.done)
					: todos,
				[todos, hideDone]
			);`).replace('{ useState }', '{ useState, useMemo }');

	const svelte = `
		<!-- PLACEHOLDER -->
					 
		<scr` + `ipt>
			let todos = [
				{ done: false, text: 'eat' },
				{ done: false, text: 'sleep' },
				{ done: false, text: 'code' },
				{ done: false, text: 'repeat' }
			];

			function toggleDone(t) {
				todos = todos.map(todo => {
					if (todo === t) return { done: !t.done, text: t.text };
					return todo;
				});
			}

			let hideDone = false;

			const filtered = hideDone
				? todos.filter(todo => !todo.done)
				: todos;
		</scr` + `ipt>

		<label>
			<input
				type="checkbox"
				bind:checked={hideDone}
			>

			hide done
		</label>

		<ul>
			{#each filtered as todo}
				<li on:click={() => toggleDone(todo)}>
					{todo.done ? '👍' : ''} {todo.text}
				</li>
			{/each}
		</ul>`;

	const snippets = [
		{ code: naive, lang: 'js' },
		{ code: memoised, lang: 'js' },
		{ code: svelte, lang: 'html' }
	];
</script>

<div bind:this={scroller} style="overflow-y: scroll;">
	{@html highlight(snippets[step].code, snippets[step].lang)}
</div>