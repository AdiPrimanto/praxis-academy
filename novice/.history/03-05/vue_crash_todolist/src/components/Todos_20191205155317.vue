<template>
    <div>
        <div v-for="todo in todos">
            <h3></h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Todos",
    props: ["todos"]
}
</script>

<style scoped>

</style>