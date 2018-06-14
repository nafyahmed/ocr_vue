import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    word_bank: [],
    word: '',
    prev_word: '',
    prev_string: ''
  },
  mutations: {
    INCREMENT (state, payload) {
    	console.log('pay =' + payload);
    	//state.word_bank.push(payload);
      state.prev_word = state.word;
    	state.word = payload;
    },
    APPENDWORD(word, state){
    	console.log('word = ' + state.word_bank);
    }
  },
  methods: {
  	increment(){
  		console.log('test');
  	}
  }
})

export default store