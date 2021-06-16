<script>

	import Presentation from './lib/Presentation.svelte';

	import Intro from './components/Intro/index.svelte';
	import Demo from './components/Demo/index.svelte';

</script>

<style>
	:global(body) {
		background-color: var(--second);
		color: black;
	}
</style>

<Presentation>
	<Intro/>
	<Demo />
	
</Presentation>
