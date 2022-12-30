<template>
  <div id="container">
    안녕하세요. 채팅창을 만들고 있는 중입니다...
    <div>
      <ul>
        <li v-for="i in text_save" :key="i">{{ inValue }}</li>
      </ul>
    </div>
    <div>
      <input
        type="text"
        v-bind:value="inValue"
        v-on:input="upValue"
        v-on:keyup.enter="setData"
      />
      <button @click="setData">전송</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      inValue: '',
      temp: '',
      text_save: []
    }
  },

  methods: {
    upValue: function (e) {
      this.inValue = e.target.value
    },

    setData: function () {
      if (this.inValue) {
        this.text_save.push(this.inValue)
        this.temp = this.inValue
        this.inValue = ''
        this.text_save = ''
      }
    }
  }
}
</script>

<style>
li {
  list-style-type: none;
}
</style>
