/* eslint-disable */

<template>
  <div id="app">
    <div class='card'><div class='card-body'><h2>OCR Recognition API</h2></div></div>
    <div class='card' style='float:right; width:10%;'><div class='card-header'>Previous Words</div><div class='card-body'><ul class='form-control' id='word_history'></ul></div></div>
    <TextBox></TextBox>
    <button class='btn btn-primary' @click='show()' style='float:left; margin-left: 5%;'>OCR</button>
    <button class='btn btn-primary'v-if='seen' @click='submit()' style='float:right; margin-right: 15%;'>Submit</button>
            <button class='btn btn-primary' v-if='seen' @click='undo()' style='float:right; margin-right: 1%; '>Undo last </button>

    <br>


    <div class='card' v-if='seen' id='current_bank' style='border-style: solid; margin-top: 2%; width: 80%; margin-left: 5%;'><div class='card-body'><h4>{{store_word}}</h4></div> </div>

    <br>
    <MyScriptJSVueComponent v-if="seen"></MyScriptJSVueComponent>
  </div>
</template>

<script>
import MyScriptJSVueComponent from '@/components/myscriptjs-vue-component';
import TextBox from '@/components/Text_Area';
import store from '../src/store'
import Vuex from 'vuex'
export default {
  name: 'App',
  data() {
    return{
      seen: false
    }
  },
  computed: {
    store_word(){
      return store.state.word;
    }
  },
  components: {
    MyScriptJSVueComponent, TextBox,
  },
  methods: {
    undo(){
      $("#user_input").val(store.state.prev_string);
    },
    show(){
      console.log('here');
      if(this.seen){
        this.seen = false;
      }
      else{
        this.seen = true;
      }
    },
    submit(){
/*      $('.prompter-text').children().each(function(){
        store.commit('INCREMENT', $(this).text());
      });

      for(var i = 0; i < store.state.word_bank.length; i++){
        store.state.word += store.state.word_bank[i];
      }

      $('#current_bank').text(store.state.word);
      store.state.word = '';
      store.state.word_bank = [];*/

      console.log($('#user_input').val());
      var string = $("#user_input").val();
      store.state.prev_string = string;
      string = string + " " + store.state.word;
      $("#user_input").val(string);
      $("#word_history").append('<li class="form-control append_wore" >' + store.state.word + '</li>');

    }
  },
};

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
