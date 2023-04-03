<template>
  <div id="container">
    <div>{{ nickname }}</div>
    <div id="screen">
      <div id="screen_detail">
        <div v-for="data in Ameg" :key="data" id="talk">
          <div id="time">{{ time }}</div>
          <div id="message">{{ data }}</div>
        </div>
      </div>
      <div id="input_container">
        <input
          id="text_box"
          type="text"
          v-on:keyup.enter="A()"
          v-model="message"
          autocomplete="off"
        />
        <button @click="A()" id="send_button">전송</button>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
// import axios from 'axios'
export default {
  name: 'App',
  data() {
    return {
      Ameg: [],
      message: '',
      textarea: '',
      time: dayjs().format('HH:mm'),
      nickname: ''
    }
  },
  created() {
    this.$socket.on('chat', (v) => {
      this.Ameg.push(v.data)
      console.log(v)
    })
  },
  methods: {
    A: function () {
      if (this.message) {
        this.$socket.emit('chat', { message: this.message })
        console.log(this.message)
        this.Ameg.push(this.message)
        this.message = ''
      }
    },

    del_all: function () {
      this.arrmeg = []
    }
  }
}
</script>

<style>
#container {
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#screen {
  height: 800px;
  border-radius: 30px;
  align-items: center;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
}
#screen_detail {
  width: 500px;
  align-items: flex-end;
  margin-right: 10px;
  margin-bottom: 2rem;
}
#input_container {
  position: fixed;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
#text_box {
  width: 300px;
  height: 30px;
  font-size: 18px;
  flex-grow: 1px;
  border-radius: 32px;
  padding: 10px;
}
#send_button {
  width: 80px;
  height: 37px;
  margin-top: 2px;
  margin-left: 5px;
  border-radius: 10px;
  border: 2px solid rgb(0, 143, 12);
  background-color: rgb(129, 228, 142);
  font-size: 20px;
}
#talk {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}
#time {
  margin-right: 20px;
  top: 30px;
  font-size: 15px;
  font-weight: 500;
}
#message {
  width: auto;
  max-width: 300px;
  height: auto;
  word-break: break-all;
  border-radius: 10px;
  border: 1px solid darkcyan;
  background-color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  font-weight: 500;
  margin-right: 30px;
  padding: 10px;
}
li {
  list-style-type: none;
}
</style>
