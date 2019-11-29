<template>
  <div id="app">
    <div class="container">
      <div class="row header mb-5 p-3">
        <div class="col-12">
          <h2>What I Do Today? </h2>
        </div>
      </div>
      <div class="row content">
        <div class="col-12">
          <div class="pekerjaan-rumah">
            <div class="row">
              <div v-for="tugasSaya in tugas" v-bind:key="tugasSaya.id" class="mb-4 tugas col-lg-12 text-left">
                <ItemTugas />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import ItemTugas from"./components"

  export default {
    name: 'app',
    //membuat data json
    //v-for dilakukan jk memiliki array di dalam data:
    data: function () {
      return {
        tugas: [{
            id: 1,
            nama: 'Membersihkan Toilet',
            isDone: false
          },
          {
            id: 2,
            nama: 'Ngoding',
            isDone: true
          },
          {
            id: 3,
            nama: 'Makan',
            isDone: false
          }
        ]
      };
    },
    components: {
      ItemTugas
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

  .header {
    background: #1abc91;
  }

  .header h2 {
    margin: 0;
  }

  .tugas .item {
    font-size: 20px;
  }

  .item-completed {
    color: #1abc9c;

  }
</style>