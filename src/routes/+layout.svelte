<script>
	import { Theme } from 'carbon-components-svelte';
	import 'carbon-components-svelte/css/all.css';
	import '../global.css';

</script>


<slot />

<Theme
	theme="white"
	tokens={{
		// 'ui-01': 'rgba(92, 77, 66, 0.8)', Previous theme for refrence
		'ui-01': 'rgba(255, 255, 255, 0.8)', // white with a little transparent them to modals/Datatable-footer
		'background-active': '#ff000',
		'layer': 'rgba(92, 77, 66, 0.2)',
		'layerActive-01': '#ff0000',
		'interactive-01': '#f4623a', //button bacground-colour
		'text-04': 'white', //button color
		// 'field-01': 'transsparent',
		'layer-selected-inverse': 'white',
		'text-inverse' : 'f4623a',
		'link-01': 'transparent',

		'layer-selected': '#f4623a',
		'layer-accent': '#f4623a',
		'layer-hover': 'rgba(92, 77, 66, 0.2)',
		'text-primary': 'white',
		'text-secondary': '#774f38'
	}}
/>
