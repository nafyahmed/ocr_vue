/* eslint-disable */
<template>
  <div class="hello">
    <textarea class='form-control' id='user_input' rows='10' style='width: 80%; margin-left: 5%;' v-on:keyup='process()'></textarea>
<!--     <button class='btn' style='float:right; margin-right: 15%;' @click='parse()'>Insert</button>
 -->  </div>
</template>

<script>
import store from '../store'
import Vuex from 'vuex'
import Vue from 'vue'
export default {
  name: 'TextBox',
  computed: {
    words(){
      store.state.word = "";
      for(var i = 0; i < store.state.word_bank.length; i++){
        console.log(i);
        word+= store.state.word_bank[i];
      }
      console.log('word = ' + word);
      return word;
    }
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      curr_result: ''
    };
  },
  methods: {
    parse() {
      console.log('parse begin');
      var second_result = $("#current_bank").val();
      var output = this.curr_result + ' ' + second_result;
      $("#user_input").val(output);
    },
    process(){
/*      console.log($('#user_input').val());
      this.curr_result = $('#user_input').val();*/
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
