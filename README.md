# @jacobmischka/vue-flatpickr

Don't forget to import styles (and themes if you wish) from `flatpickr`.

```vue
<template>
	<VueFlatpickr class="form-control"
		:options="{dateFormat: 'F j, Y'}"
		v-model="reportDates">
	</VueFlatpickr>
</template>
<script>
	import VueFlatpickr from '@jacobmischka/vue-flatpickr';
	import 'flatpickr/dist/flatpickr.css';

	export default {
		components: {
			VueFlatpickr
		}
	};
</script>
```

## Hooks

[Hooks][hooks] are emitted as Vue events, **except** `onDayCreate`. That one fires too often to be an automatic event, please specify that handler in the options object.

## Breaking changes in 5.0

The `input` vue event now returns the selected date(s) directly, and not the rendered string from the input. Will return a single Date if `mode` is `'single'` (the default), or an array otherwise.

[hooks]: https://chmln.github.io/flatpickr/events/#hooks
