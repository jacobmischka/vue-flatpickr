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
	'onValueUpdate',
	'onDayCreate'
]);

export default {
	props: {
		placeholder: {
			type: String,
			default: ''
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
		const origOnValUpdate = this.hookedOptions.onValueUpdate;
		this.fp = new Flatpickr(this.$el, Object.assign(this.hookedOptions, {
			onValueUpdate () {
				self.onInput(self.$el.value)
				if (typeof origOnValUpdate === 'function') {
					origOnValUpdate();
				}
			}
		}));
		this.$emit('FlatpickrRef', this.fp);
	},
	destroyed() {
		this.fp.destroy();
		this.fp = null;
	},

	methods: {
		onInput(e) {
			typeof e === 'string'
				? this.$emit('input', e)
				: this.$emit('input', e.target.value);
		},
		addHooks(options) {
			options = Object.assign({}, options);

			for (let hook of hooks) {
				let firer = (selectedDates, dateStr, instance) => {
					this.$emit(stripOn(hook), [selectedDates, dateStr, instance]);
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
