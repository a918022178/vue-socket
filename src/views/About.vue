<template>
  <div id="app">
    <div class="news" v-for="(item, i) in arr" :key="i">
      <div v-if="userName !== item.name" >
        <span class="name">{{item.name}}</span>
        ：
        <span class="text">{{item.str}}</span>
      </div>
      <div class="news isSelf" v-else>
        <span class="text">{{item.str}}</span>
          ：
        <span class="name">{{item.name}}</span>
      </div>
    </div>
    
    <input type="text" v-model="a">
    <br/>
    <h1 @click="send">发送消息</h1>
  </div>
</template>

<script>
export default {
  name: "NetList",
  data () {
    return {
      a: '',
      arr: [],
      ws: '',
      userName: '',
      isSelf: false
    }
  },
  mounted() {
    var hiddenProperty = 'hidden' in document ? 'hidden' :    
        'webkitHidden' in document ? 'webkitHidden' :    
        'mozHidden' in document ? 'mozHidden' :    
        null;
    var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
    var onVisibilityChange = function(){
        if (!document[hiddenProperty]) {    
            document.title='被发现啦(*´∇｀*)';
        }else{
            document.title='藏好啦(つд⊂)  ';
        }
    }
    document.addEventListener(visibilityChangeEvent, onVisibilityChange);

    let str = '1234567890afdsdwrekhotpowrelk'
    let name = ''
    for (let i = 0; i < 6; i++) {
      let j
      let ss = parseInt(Math.random() * 10) + parseInt(Math.random() * 10) * 3
      if (ss <= 8) {
        j = ss
      } else {
       j = ss - 8
      }
      name += str[j]
    }
    this.userName = name
  },
  methods: {
    send () {
      let params = {
        name: this.userName,
        str: this.a
      }
      this.$socket.emit("compile", params);
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
input {
  outline: none;
  padding: 8px 14px;
  border: 1px solid #0da5dc;
  width: 300px;
  border-radius: 4px;
}
h1 {
  padding: 8px 16px;
  background: #0da5dc;
  display: inline-block;
  color: #fff;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: 0 0 3px #0da5dc;
  cursor: pointer;
}
.news {
  text-align: left;
  width: 400px;
  margin: 15px auto;
}
.isSelf.news {
  text-align: right;
}
.name {
  color: #0da5dc;
}
.text {
  font-size: 14px;
  padding: 12px 22px;
  background-color: #2ebb58;
  color: #fff;
  border-radius: 10px;
  margin: 0 20px;
  display: inline-block;
}
</style>
