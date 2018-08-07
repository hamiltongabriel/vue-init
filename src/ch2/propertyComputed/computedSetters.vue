<template>
    <div>
        <label>Legs: <input v-model="legCount" type="range"></label>
        <label>Tops: <input @input="update" :value="tableCount"></label>
        <output>
            We are going to build {{legCount}} Legs
            and assembly {{tableCount}} tables.
        </output>
    </div>
</template>
<script>
// Quando for mais simples fazer uma alteracao direta do que modificar as dependencias reativas da pagina
// Use um setter.
export default {
    data: () => ({
        legCount: 0
    }),
    // Criando o numero de tabelas.
    computed: {
        tableCount: {
            get(){
                return this.legCount / 4
            },
            set (newValue) {
                this.legCount = newValue * 4
            }
        }
    },
    methods: {
              update(e) {
                debugger
             this.tableCount = e.target.value
        }
    }
}
</script>
