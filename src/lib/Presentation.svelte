<script context="module">
	export const key = {};
</script>

<script>
	import { setContext, onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { LEFT_ARROW, RIGHT_ARROW } from './keys.js';

	const match = /slide=(\d+)/.exec(window.location.hash);
	const initial = match ? +match[1] - 1 : 0;

	const current_slide = writable(null);
	const total_word_count = writable(0);

	let slides = [];
	let prev_slide;

	setContext(key, {
		add_slide(slide) {
			slide.index = slides.length;

			if (prev_slide) {
				prev_slide.next_slide = slide;
				slide.prev_slide = prev_slide;
			}

			if (slide.index === initial) {
				$current_slide = slide;
			}

			slides.push(slide);
			prev_slide = slide;
		},

		current_slide,
		total_word_count
	});

	function navigate(event) {
		switch (event.which) {
			case LEFT_ARROW:
				if ($current_slide.prev_step()) return;

				if ($current_slide.prev_slide) {
					$current_slide = $current_slide.prev_slide;
					$current_slide.reset(true);
				}
				// console.clear();
				break;

			case RIGHT_ARROW:
				if ($current_slide.next_step()) return;

				if ($current_slide.next_slide) {
					$current_slide = $current_slide.next_slide;
					$current_slide.reset(false);
				}
				// console.clear();
				break;
		}
	}

	$: if (duration) {
		const mins = Math.floor(duration);
		const secs = Math.round(60 * (duration % 1));

		console.log(`estimated duration at 150wpm: ${mins}:${secs < 10 ? '0' + secs : secs}`);
	}

	$: duration = $total_word_count / 150;

	$: if ($current_slide) {
		window.location.hash = `slide=${$current_slide.index + 1}`;
	}
</script>

<svelte:window on:keydown={navigate}/>

<style>
	.presentation {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		/* font-size: 1vw; */
	}

	.controls {
		position: absolute;
		bottom: 1em;
		left: 0;
		width: 100%;
		text-align: center;
		font-family: monospace;
	}

	.presentation :global(.lt-flex-column) {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.presentation :global(.lt-flex-row) {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.presentation :global(.lt-center) {
		position: absolute;
		left: 50%;
		top: 40%;
		transform: translate(-50%,-50%);
	}

	.presentation :global(.lt-right-half) {
		position: absolute;
		width: 50%;
		height: 100%;
		right: 0;
		top: 0;
	}

	.presentation :global(.lt-hidden) {
		position: absolute;
		width: 0;
		height: 0;
		visibility: hidden;
		/* pointer-events: none; */
	}

	.presentation :global(.lt-max) {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		background: 50% 50% no-repeat;
		background-size: cover;
	}
</style>

<div class="presentation">
	<slot></slot>

	<!-- <div class="controls">
		{#each slides as slide}
			<span>{slide === $current_slide ? 'x' : 'o'}</span>
		{/each}
	</div> -->
</div>