<template>
    <div class="profile">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <div class="media text-left">
                        <img src="../assets/apple.png" class="user-pic mr-3">
                        <div class="media-body">
                            <h5 class="mt-0">{{firstName + ' ' + lastName}}</h5>
                            <p{{bio}}</p{>
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