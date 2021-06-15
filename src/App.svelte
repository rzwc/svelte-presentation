<script>
	// export let name;
	import Presentation from "./lib/Presentation.svelte";
	import NotReactiveYet from "./components/test/index.svelte";
</script>

<Presentation>
	<NotReactiveYet />

	<div class="lt-hidden">
		<!-- force preload -->
		<span style="font-family: var(--font)">x</span>
		<span style="font-family: var(--font-mono)">x</span>
		<span style="font-family: var(--font-system)">x</span>
	</div>
</Presentation>

<div hidden class="misc-notes">
	react no good for animation developer experience features reactive
	declarations spreadsheets — accessible to all
</div>


<!-- <style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style> -->

<!-- <main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main> -->
<style>
	:global(body) {
		background-color: var(--second);
		color: white;
	}
</style>
