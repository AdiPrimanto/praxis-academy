<template>
    <div>
        <div v-bind:key="todo.id" v-for="todo in todos">
            <h3>{{ todo.title }}</h3>
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: "Todos",
    components: {
        T
    }
    props: ["todos"]
}
</script>

<style scoped>

</style>