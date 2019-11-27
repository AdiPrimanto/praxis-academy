<template>
    <div class="logos-wrapper">
        <h2>Find Best Logos</h2>
        <div class="item-logos">
            <img alt="apple logo 1" src="./assets/apple2.png">
        </div>
        <div class="item-logos">
            <img src="" alt="">
        </div>
        <div class="item-logos">
            <img src="" alt="">
        </div>
        <div class="item-logos">
            <img src="" alt="">
        </div>
        <div class="item-logos">
            <img src="" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Logos'
}
</script>

<style scoped>
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
        background: lightgreen;
    }
</style>