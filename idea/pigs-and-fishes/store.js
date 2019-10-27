


export default new Vuex.Store({
  state: {
    pageDisplay: 'initial',
    binaryHex: [],
    hexagram: '',
    //hexagram.lines: [],
  },
  getters: {

  },
  mutations: {
    displayCast (state) {
      state.pageDisplay = 'cast'
    },
    displayInitial (state) {
      state.pageDisplay = 'initial'
    },
    displayInfo (state) {
      state.pageDisplay = 'hexInfo'
    },
    setBinaryHex (state, hexData) {
      state.binaryHex = hexData
    },
    setHexagram (state, hexagram) {
      state.hexagram = hexagram
    },
    setLines (state, lineData) {
      state.lines = lineData;
      //state.hexagram.lines = lineData;
    }
  }
})
