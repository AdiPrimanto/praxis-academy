<template>
  <div id="app">
    <h3>What I Do Today? </h3>
    <div class="pekerjaan-rumah">
      <div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id" class="tugas">
        <p>{{tugasSaya.nama}}</p>
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
          nama: 'Membersihkan Toilet',
          isDone: true
        },
        {
          id: 2,
          nama: 'Ngoding'
        },
        {
          id: 3,
          nama: 'Makan'
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