import { cubicOut } from 'svelte/easing';

export default function scale(node, params) {
	const {
		delay = 0,
		duration = 400,
		easing = cubicOut,
		start = 0
	} = params;

	const d = 1 - start;

	const transform = (node.style.transform || getComputedStyle(node).transform).replace('none', '');

	return {
		delay,
		duration,
		easing,
		css: (t, u) => `transform: ${transform} scale(${1 - (d * u)}); opacity: ${t}`
	};
}