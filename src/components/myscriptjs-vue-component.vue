/* eslint-disable */
<template>
  <div>
    <div class="writing-container" ref="editor" @click="test()"></div>
  </div>
</template>

<script>
import * as MyScriptJS from 'myscript/src/myscript';
import store from '../store'
import Vuex from 'vuex'
import Vue from 'vue'
import '../function'
export default {
  name: 'MyScriptJSVueComponent',
  computed: {
    counter() {
      return store.state.counter
    }
  },
  data() {
    return {
      msg: 'Basic example of vue integration of MyScriptJS',
    };
  },
  created() {
    console.log("Created" + this.$refs['editor']);
  },
  mounted() {
    // Fired every second, should always be true
    // eslint-disable-next-line
    console.log("Mounted " + this.$refs['editor']);
    MyScriptJS.register(this.$refs.editor, {
      recognitionParams: {
        type: 'TEXT',
        protocol: 'WEBSOCKET',
        apiVersion: 'V4',
        server: {
          scheme: 'https',
          host: 'webdemoapi.myscript.com',
          applicationKey: '44d460e2-ad65-4d77-94c6-203768381481',
          hmacKey: 'b4112635-0934-4201-af7f-ef253c7e0407',
          themecolor: "#FFFFFF",
          solvercolor: "#A8A8A8",
 theme:'{".green": {"color": "#00FF00", "-myscript-pen-width": "3"}}',
                           penstyleclasses: "green"
        },
      },
    });
  },
  methods: {

    test(){
      //console.log(MyScriptJS.LoggerConfig.testLogger);
      var i = 0;
      var string = '';
      console.log($('.prompter-text').children().eq(0).text());
      $('.prompter-text').children().each(function(){
        console.log($(this).text());
        string += $(this).text();
        //store.commit('INCREMENT', $(this).text());
      });
      store.commit('INCREMENT', string);
      //store.commit('INCREMENT', $('.prompter-text').children().eq(0).text());*/
    }
  },
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import url('myscript/dist/myscript.min.css');
  h1,
  h2 {
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
  .writing-container {
    min-height: 600px;
    min-width: 300px;
  }

  /*.smartguide{
    display: none;
  }*/
</style>
