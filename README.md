# @jacobmischka/vue-flatpickr

Don't forget to import a theme from `flatpickr/dist/themes`.

[Hooks][hooks] are emitted as vue events, **except** `onDayCreate`. That one fires too often to be an automatic event, please specify that handler in the options object.

[hooks]: https://chmln.github.io/flatpickr/events/#hooks
