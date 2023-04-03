<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      nickname: ''
    }
  },

  methods: {
    next_page: function () {
      axios.post('/nick', {
        nick: this.nickname
      })
    }
  }
}
</script>
<style>
h2 {
  cursor: pointer;
}

h2:hover {
  color: darkblue;
  transform: scale(1.1);
  transition: 0.1s linear;
}
</style>
