<template>
    <div class="profile">
        <div class="container">
            <div class="row">
                <div class="col-lg">
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