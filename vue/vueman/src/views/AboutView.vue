<template>
  <div>
    <h1>로그인</h1>
    <input type="text" value="닉네임" />
    <button v-on@click="data">참여</button>
  </div>
</template>
<script>
import data from '../views/chat.vue'
export default {
  name: 'app',
  data() {
    return {
      data: ''
    }
  },
  methods: {}
}
</script>
