<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2 @click="$router.push('/chating')">
      Socket을 이용한 채팅 프로그램 개발
    </h2>
    <!-- <router-link
      :to="{
        name: 'chating',
        params: { name: nickname }
      }"
    >
    </router-link> -->
    <input
      v-model="nickname"
      type="text"
      placeholder="대화하실 닉네임을 입력해주세요."
    />
    <button @click="next_page">입력</button>
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
