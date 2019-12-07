<template>
    <div>
        <p>Todo Item</p>
    </div>
</template>

<script>
export default {
    name: 'TodoItem'
}
</script>

<style scoped>
    .todo-item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }
    .is-complete{
        text-decoration: line-through;
    }
    .del{
        background: #ff0000;
        color: #fff;
        border: none;
        
    }
</style>