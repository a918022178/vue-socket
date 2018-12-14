<template>
  <div id="app">
    <div v-for="(v, i) in arr" :key="i">{{v}}</div>
    <input type="text" v-model="a">
    <h1 @click="send">send</h1>
  </div>
</template>

<script>
export default {
  name: "NetList",
  data () {
    return {
      a: '',
      arr: [],
      ws: ''
    }
  },
  mounted() {
    // this.ws = new WebSocket('ws://172.16.110.166:8888')
  },
  methods: {
    send () {
      this.$socket.emit("compile", this.a);
    }
  },
  sockets: {
    connect () {
      console.log("socket connected");
    },
    login (v) {
      console.log(v)
      this.arr.push(v)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
