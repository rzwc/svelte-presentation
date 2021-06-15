import PrismJS from 'prismjs';

const langs = {
	bash: 'bash',
	html: 'markup',
	js: 'javascript',
	css: 'css',
};

export function highlight(code, lang = 'js', classes = []) {
	const match = /\n\s+/m.exec(code);
	const indentation = match
		? match[0].slice(1)
		: '';

	const regex = new RegExp(`^${indentation}`, 'gm');

	code = code
		.replace(regex, '')
		.trim()
		.replace(/<!-- PLACEHOLDER -->/g, '');

	const plang = langs[lang];
	const highlighted = PrismJS.highlight(
		code,
		PrismJS.languages[plang],
		lang,
	);

	const class_name = classes.length > 0
		? ` class="${classes.join(' ')}"`
		: '';

	// return `<pre class='language-${plang}'><code>${highlighted}</code></pre>`;
	return `<pre${class_name}><code class='language-${plang}'>${highlighted}</code></pre>`;
}