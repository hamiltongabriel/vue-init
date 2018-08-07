<template>
    <div id="app">
        <input type="text" v-model="name"/>
        <input type="text" value="Pinheiro" id="surname"/>
        <button @click="save">Save</button>
        <output>{{computedFullName}}</output>
    </div>
</template>
<script>
let surname = 'Pinheiro'
export default {
    data:() => ({
        name: 'Hamilton'
    }),
    computed: {
        computedFullName () {
            return this.name + ' ' + surname
        }
    },
    methods: {
        save() {
            surname = this.$el.querySelector('#surname').value
        }
    }
}
</script>

