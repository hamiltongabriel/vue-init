<template>
    <div>
        <input type="text" v-model="name" />
        <input type="text" id="surname" value="Hamilton"/>
        <button @click="saveSurname"> Salvar Sobrenome</button>
        <output>{{computedFullName}}</output>
    </div>
</template>
<script>
    export default{
        data:() => ({
            name: 'Hamilton',
            surname: 'Snow'
        }),
        computed: {
            computedFullName(){
                return this.name + ' ' + this.surname
            }
        },
        methods: {
            saveSurname(){
                this.surname = this.$el.querySelector('#surname').value
            }
        }
    }
</script>