<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add Todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
import uuid from 'uuid';
export default {
    name: "AddTodo",
    data(){
        return {
            title: ''
        }
    },
    methods: {
        addTodo(){
            const newTodo = {
                id: uuid.v4(), 
                title: this.title,
                completed: false
            }
            //Send to parent
            $this.emit
        }
    }
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