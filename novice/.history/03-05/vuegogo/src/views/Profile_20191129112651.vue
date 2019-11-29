<template>
    <div class="profile">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="media text-left">
                        <img src="../assets/apple.png" class="user-pic mr-3">
                        <div class="media-body">
                            <h5 class="mt-0">{{firstName + ' ' + lastName}}</h5>
                            <p>{{bio}}</p>
                        </div>
                    </div>

                    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'

    export default {
        name: 'profile',
        // belajar dgn data statis (dami) bukan dinamis (berubah2), yg di bawah ini membuat json
        data: function(){
            // property(variabel): value
            return{
                firstName: 'iPhone',
                lastName: 'Pro Max',
                bio: 'Desgined by Apple in California'
            }
        },
        components: {

        }
    }
</script>

<style  scoped>
    .user-pic{
        height: 75px;
        width: 70px;
        border-radius: 200%;      
            /* -->untuk membuat bundar */
    }
</style>