<template>
    <div class="logos-wrapper">
        <h2 class="title-header">Find Best Logos</h2>
        <div class="item-logos">
            <img class="logo" alt="apple logo 2" src="../assets/apple2.png">
        </div>
        <div class="item-logos">
            <img alt="apple logo 3" src="../assets/apple3.png">
        </div>
        <div class="item-logos">
            <img alt="apple logo 4" src="../assets/apple4.png">
        </div>
        <div class="item-logos">
            <img alt="apple logo 5" src="../assets/apple5.png">
        </div>
        <div class="item-logos">
            <img alt="apple logo 6" src="../assets/apple6.png">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Logos'
}
</script>

<style scoped>
    .title-header{
        margin-bottom: 80px;
    }
    .logos-wrapper{
        width: 70%;
        overflow: hidden;
        margin: auto;
    }
    .item-logos{
        width: 150px;
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;
        height: 150px;
        /* background: lightgreen; */
    }
    .item-logos .logo{
        width: 150px;
        height: 150px;
    }
</style>