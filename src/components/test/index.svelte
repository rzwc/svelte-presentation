<script>
	import Slide from '../../lib/Slide.svelte';
	import Code from './Code.svelte';
	import TodoList from './TodoList.svelte';
</script>

<style>
	div :global(pre) {
		/* position: absolute;
		top: 0;
		left: 0; */
		height: 100%;
		box-sizing: border-box;
	}

	.container {
		position: relative;
		background-color: white;
	}

	.scrollable {
		position: relative;
		width: 50em;
		height: 60em;
		overflow: hidden;
		background-color: red;
	}
</style>

<Slide steps={3} let:step>
	<h2>We're not reactive yet</h2>

	<div class="side-by-side" style="grid-template-columns: 2fr 1fr;" on:keydown|capture|stopPropagation|preventDefault={(e) => {console.log(e); e.preventDefault()}}>
		<Code {step}/>

		<div>
			<TodoList broken={step >= 2}/>
		</div>
	</div>
</Slide>