<script>
	import { cubicOut, elasticOut } from 'svelte/easing';
	import Presentation from './lib/Presentation.svelte';

	import Intro from './components/Intro/index.svelte';
	import Lanpar from './components/Lanpar/index.svelte';
	import Spreadsheet from './components/Spreadsheet/index.svelte';
	import VisiCalc from './components/VisiCalc/index.svelte';
	import Lotus123 from './components/Lotus123/index.svelte';
	import Title from './components/Title/index.svelte';
	import WhatIsReactiveProgramming from './components/WhatIsReactiveProgramming/index.svelte';
	// import TicketMaestro from './components/TicketMaestro/index.svelte';
	// import ImperativeProgramming from './components/ImperativeProgramming/index.svelte';
	// import DeclarativeProgramming from './components/DeclarativeProgramming/index.svelte';
	// import ReactiveProgramming from './components/ReactiveProgramming/index.svelte';
	import React from './components/React/index.svelte';
	import HowVirtualDomWorks from './components/HowVirtualDomWorks/index.svelte';
	import Symptoms from './components/Symptoms/index.svelte';
	import SomethingChanged from './components/SomethingChanged/index.svelte';
	import Operator from './components/Operator/index.svelte';
	import Demo from './components/Demo/index.svelte';
	import WhatAreFrameworks from './components/WhatAreFrameworks/index.svelte';
	import Svelte from './components/Svelte/index.svelte';
	import ReactivityInTheLanguage from './components/ReactivityInTheLanguage/index.svelte';
	import ImportingSvelteComponents from './components/ImportingSvelteComponents/index.svelte';
	import NotReactiveYet from './components/NotReactiveYet/index.svelte';
	import ObservableHQ from './components/ObservableHQ/index.svelte';
	import DestinyOperator from './components/DestinyOperator/index.svelte';
	import KindOfMagic from './components/KindOfMagic/index.svelte';
	// import ComponentsAreANewSubstrate from './components/ComponentsAreANewSubstrate/index.svelte';
	import MyHobby from './components/MyHobby/index.svelte';
	import ConcurrentReact from './components/ConcurrentReact/index.svelte';
	import TheSvelteAlternative from './components/TheSvelteAlternative/index.svelte';
	import RadicalSimplicity from './components/RadicalSimplicity/index.svelte';
	import HowToSpeedUpYourCode from './components/HowToSpeedUpYourCode/index.svelte';
	import DoesPerfMatter from './components/DoesPerfMatter/index.svelte';
	import BeyondSvelte from './components/BeyondSvelte/index.svelte';
	import SpreadsheetsArePrettyCool from './components/SpreadsheetsArePrettyCool/index.svelte';
	import JoinUs from './components/JoinUs/index.svelte';
	import Viewport from './components/Viewport/index.svelte';
</script>

<style>
	:global(body) {
		background-color: var(--second);
		color: white;
	}
</style>

<Presentation>
	<Intro/>
	<Lanpar/>
	<Spreadsheet/>
	<VisiCalc/>
	<Lotus123/>
	<Title/>
	<!-- <TicketMaestro/>
	<ImperativeProgramming/>
	<DeclarativeProgramming/>
	<ReactiveProgramming/> -->
	<WhatIsReactiveProgramming/>
	<React/>
	<HowVirtualDomWorks/>
	<Symptoms/>
	<WhatAreFrameworks/>
	<Svelte/>
	<SomethingChanged/>
	<Operator/>
	<ReactivityInTheLanguage/>
	<Demo name="simple" title="A simple Svelte component"/>
	<ImportingSvelteComponents/>
	<NotReactiveYet/>
	<ObservableHQ/>
	<DestinyOperator/>
	<Demo name="reactive-declaration" title="Adding reactive declarations"/>
	<KindOfMagic/>
	<!-- <ComponentsAreANewSubstrate/> -->
	<MyHobby/>
	<ConcurrentReact/>
	<TheSvelteAlternative/>
	<RadicalSimplicity/>
	<HowToSpeedUpYourCode/>
	<DoesPerfMatter/>
	<Demo name="a11y" title="Accessibility"/>
	<Demo name="styles" title="Scoped styles"/>
	<!-- <Demo name="input-bindings" title="Form element bindings"/>
	<Demo name="media-bindings" title="Media bindings"/>
	<Demo name="scroll-bindings" title="Scroll bindings"/> -->
	<Demo name="simple-transitions" title="Simple transitions"/>
	<Demo name="complex-transitions" title="Complex transitions"/>
	<BeyondSvelte/>
	<SpreadsheetsArePrettyCool/>
	<JoinUs/>

	<div class="lt-hidden">
		<!-- force preload -->
		<span style="font-family: var(--font)">x</span>
		<span style="font-family: var(--font-mono)">x</span>
		<span style="font-family: var(--font-system)">x</span>
	</div>
</Presentation>


<div hidden class="misc-notes">
	react no good for animation

	developer experience
	features
	reactive declarations

	spreadsheets — accessible to all
</div>

<!-- <Viewport/> -->