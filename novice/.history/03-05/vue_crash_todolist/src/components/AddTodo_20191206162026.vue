<template>
    <div>
        <form>
            <input type="text" name="title" placeholder="Add Todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
    data()
}
</script>

<style scoped>
    form{
        display: flex;
    }
    input[type="text"]{
        flex:10px;
        padding: 5px;
    }
    input[type="submit"]{
        flex: 2px;
    }
</style>