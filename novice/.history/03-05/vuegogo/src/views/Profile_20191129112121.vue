<template>
    <div class="profile">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="media text-left">
                        <img src="../assets/apple.png" class="user-pic mr-3">
                        <div class="media-body">
                            <h5 class="mt-0">Apple</h5>
                            <p>Designed by apple in California</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.css'

    export default {
        name: 'profile',
        // belajar dgn data statis (dami) bukan dinamis (berubah2)
        data: function(){
            // property(variabel): value
            return{firstName: 'Adi',

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