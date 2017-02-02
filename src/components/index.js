import VueFlatpickr from './vue-flatpickr.vue'

const install = function (Vue) {
  Vue.component('Flatpickr', VueFlatpickr)
}

export default Object.assign(VueFlatpickr, { install })
