<template>
  <div class="hello">
    <textarea v-model="text" class="textSize"/>
    <button @click="onClick()">実行</button>
  </div>
</template>

<script>
import { engineRun } from '@/process/engineJs/index.js'
import { rawRun } from 'exec-engine-js'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      text: ''
    }
  },
  methods: {
    onClick: function () {  
      // let exec = require('exec-engine-js')
      const get = rawRun(this.text)
      // const get = exec.rawRun(this.text)
      console.log('get', get, typeof get)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.textSize {
  width: 500px;
  height: 300px;
}
</style>
