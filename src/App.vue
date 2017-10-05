<template>
  <div id="app">
    <h1>@jacobmischka/vue-flatpickr</h1>
    <p>{{ date || 'MM-DD-YYYY' }}</p>
    <Flatpickr :options="options" v-model="date" />
  </div>
</template>

<script>
import VueFlatpickr from './components/index.js';
import 'flatpickr/dist/themes/airbnb.css';

export default {
  data () {
    return {
      date: null,
      options: {
        allowInput: true,
        enableTime: true,
        time_24hr: true
      }
    }
  },
  components: {
    'Flatpickr': VueFlatpickr
  }
}
</script>

<style lang="less">
  html,
  body {
    height: 100%;
    overflow: hidden;
    background: #4fc08d;
    color: #fff;
  }
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1,
    h4 {
      margin-bottom: 0;
    }
    h1 {
      font-size: 48px;
    }
    p {
      margin-bottom: 0;
    }
    input {
      padding: 10px;
      margin-top: 20px;
      width: 200px;
      outline: none;
      background: none;
      border: 2px solid #fff;
      color: #fff;
    }
    a {
      color: #fff;
      margin-top: 20px;
      outline: none;
    }
  }
</style>
