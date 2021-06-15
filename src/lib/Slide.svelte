<script>
	import { getContext, onMount } from 'svelte';
	import { key } from './Presentation.svelte';

	export let style = '';
	export let steps = 1;

	let step = 0;

	const { add_slide, current_slide, total_word_count } = getContext(key);

	const slide = {
		steps,

		next_step: () => {
			if (step < steps - 1) {
				step += 1;
				return true;
			}
		},
		prev_step: () => {
			if (step > 0) {
				step -= 1;
				return true;
			}
		},

		reset(end) {
			step = end ? steps - 1 : 0;
		},

		// filled in by parent
		next_slide: null,
		prev_slide: null
	};

	add_slide(slide);

	let notes;
	let word_count;

	onMount(() => {
		const word_count = notes.textContent.split(' ').length;
		$total_word_count += word_count;
	});

	// $: if (notes && $current_slide === slide) {
	// 	console.log(notes.textContent);
	// }
</script>

<style>
	.slide {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 2vw;
		background: 50% 50% no-repeat;
		background-size: cover;
		box-sizing: border-box;
	}
</style>

{#if $current_slide === slide}
	<div class="slide" {style}>
		<slot {step}></slot>
	</div>
{/if}

<div hidden bind:this={notes}>
	<slot name="speaker-notes"></slot>
</div>