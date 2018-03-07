<template>
	<input type="text" :placeholder="placeholder" :value="value">
</template>

<script>
import Flatpickr from 'flatpickr';

const hooks = new Set([
	'onChange',
	'onOpen',
	'onClose',
	'onMonthChange',
	'onYearChange',
	'onReady',
	'onValueUpdate'
]);

export default {
	props: {
		placeholder: {
			type: String,
			required: false
		},
		options: {
			type: Object,
			default: () => ({})
		},
		value: {
			type: String,
			default: ''
		}
	},
	data () {
		return {
			fp: null
		};
	},

	computed: {
		hookedOptions() {
			return this.addHooks(this.options);
		}
	},

	watch: {
		value(val) {
			this.fp.setDate(val);
		},
		hookedOptions(options, oldOptions) {
			for (let [key, val] in Object.entries(options)) {
				if (val !== oldOptions[key])
					this.fp.set(key, val);
			}
		}
	},

	mounted () {
		const self = this;
		this.fp = new Flatpickr(this.$el, this.hookedOptions);
		this.$emit('FlatpickrRef', this.fp);
	},
	destroyed() {
		this.fp.destroy();
		this.fp = null;
	},

	methods: {
		addHooks(options) {
			options = Object.assign({}, options);

			if (!options.onChange) {
				options.onChange = [];
			} else if (!Array.isArray(options.onChange)) {
				options.onChange = [options.onChange];
			}

			options.onChange.push((selectedDates, dateStr) => {
				this.$emit('input', dateStr);
			});

			for (let hook of hooks) {
				let firer = (selectedDates, dateStr, instance) => {
					this.$emit(stripOn(hook), selectedDates, dateStr, instance);
				};

				if (hook in options) {
					// Hooks must be arrays
					if (!Array.isArray(options[hook]))
						options[hook] = [options[hook]];

					options[hook].push(firer);
				} else {
					options[hook] = [firer];
				}
			}

			return options;
		}
	}
};

function stripOn(hook) {
	return hook.charAt(2).toLowerCase() + hook.substring(3);
};
</script>
