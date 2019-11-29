<template>
  <div id="app">
    <h3>What I Do Today? </h3>
    <div class="pekerjaan-rumah">
      <div v-for="tugasSaya in tugas" v-bind:key="" class="tugas">
        <p>Penyapu Rumah</p>
      </div>
    </div>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'app',
    //membuat data json
    //v-for dilakukan jk memiliki array di dalam data:
    data: function() {
      return {
        tugas: [{
          id: 1,
          nama: 'Membersihkan Toilet'
        }]
      };
    },
    components: {

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