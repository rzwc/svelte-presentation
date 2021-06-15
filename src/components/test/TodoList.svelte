<script>
	export let broken;

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

	$: filtered = broken
		? todos.map(todo => ({ done: false, text: todo.text }))
		: hideDone
			? todos.filter(todo => !todo.done)
			: todos;
</script>

<style>
	.container {
		background: white;
		color: #333;
		padding: 1vw;
	}

	label {
		font-size: 1vw;
		border-bottom: 1px solid #eee;
		padding: 0.5vw 0;
		margin: 0 0 0.5vw 0;
		height: 2.5vw;
		box-sizing: border-box;
	}

	ul {
		padding: 0
	}

	li {
		list-style: none;
		display: block;
		line-height: 1.2;
		font-size: 2vw;
		cursor: pointer;
	}
</style>

<div class="container border-radius drop-shadow">
	<label>
		<input type="checkbox" bind:checked={hideDone}>
		hide done
	</label>

	<ul>
		{#each filtered as todo}
			<li on:click={() => toggleDone(todo)}>
				{todo.done ? '👍' : ''} {todo.text}
			</li>
		{/each}
	</ul>
</div>