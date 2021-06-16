<script>
	import Slide from '../../lib/Slide.svelte';
	import { fade } from 'svelte/transition';
	import { sineOut } from 'svelte/easing';

	export let step;

	function float(node, params) {
		const { delay = 0, duration = 15000, y } = params;

		const transform = getComputedStyle(node).transform.replace('none', '');

		return {
			delay,
			duration,
			easing: sineOut,
			css: (t, u) => `transform: ${transform} translate(0, ${u * y}px)`
		};
	}
</script>

<style>
	h1 {
        color:black
    }
</style>

<Slide steps={2} let:step>
	{#if step === 0}
		<h1>This is the intro slide, press the arrow key again</h1>
	{/if}

	{#if step === 1}
        <h1>This is step step 1 </h1>
    {/if}
</Slide>