# Vue-Flatpickr (^2.2.0)
`Flatpickr` for `VueJS` bases on the lastest version of [Flatpickr](https://github.com/chmln/flatpickr) (^2.2.5).

Demo: [https://jrainlau.github.io/vue-flatpickr/](https://jrainlau.github.io/vue-flatpickr/)

> Version 2.x supports `VueJS 2.x` only. Check out the `master` branch  for supporting `VueJS 1.0`

## Install
```
npm install vue-flatpickr --save
```

## Usage
Enter your `main.js` file which inits the `VueJS`:
```
import Vue from 'vue'
import App from './App.vue'
import VueFlatpickr from 'vue-flatpickr'
import 'vue-flatpickr/theme/airbnb.css'

Vue.use(VueFlatpickr)

new Vue({
  el: '#app',
  ...App
})
```
then you can use `Vue-Flatpickr` directly in your `*.vue` file:
```
<Flatpickr />
```

## Options
Use `props` to pass an option object to `Vue-Flatpickr`:
```
<!-- template -->
<Flatpickr :options="fpOptions" />
```

```
<!-- script -->
data () {
  return {
    fpOptions: {}
  }
}
```
> `Vue-Flatpickr` supports all options as the [Official Document](https://chmln.github.io/flatpickr/), except the *"Custom elements and input groups"*

## Data binding
`Vue-Flatpickr` supports `v-model` for data binding:
```
<!-- template -->
<Flatpickr v-model="dateStr" />
```

```
<!-- script -->
data () {
  return {
    dateStr: ''
  }
}
```

## Themes
`Vue-Flatpickr` supports all the offical themes. You should import the theme you like from `vue-flatpickr/theme` after you've imported the `VueFlatpickr`.
```
import VueFlatpickr from 'vue-flatpickr'
import 'vue-flatpickr/theme/airbnb.css'
```

Themes you could use:
- `airbnb.css`
- `base16_flat.css`
- `confetti.css`
- `dark.css`
- `flatpickr.min.css`
- `material_blue.css`
- `material_green.css`
- `material_orange.css`
- `material_red.css`

## Development

- Run dev

```
git clone https://github.com/jrainlau/vue-flatpickr.git

cd vue-flatpickr && npm install

npm run dev
```

- Run build-demo

```
npm run build-demo
```
then checkout the `/dist` folder for demo.

- Run build

```
npm run build
```
then checkout the `/dist` folder for bundle.

> `Vue-Flatpickr` is using `eslint-standar`, all pull request must follow the standar nor not allow to be merged.

## Lisense
MIT
