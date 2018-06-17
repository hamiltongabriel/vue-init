<template>
  <div>
    <label>Pernas: <input v-model="legCount" type="range" ></label>
    <br>
    <label>Maximo: <input @input="update" :value="tableCount"></label>
    <br>
    <output>
      Citamos {{legCount}} Pernas
      E Construimos {{tableCount}} Tabelas.
    </output>
  </div>
</template>

<script>
export default {
  nome: 'QuantidadeConstruida',
  data: () => ({
    legCount: 0
  }),
  computed: {

    tableCount: {
      // Descobrindo o numero de tabelas.
      // pega o valor da propriedade
      get () {
        return this.legCount / 4
      },
      // Define o numero de Tabelas

      set (newValue) {
        this.legCount = newValue * 4
      }
    }
  },
  // Metodo de atualizacao.
  methods: {
    update (e) {
      this.tableCount = e.target.value
    }
  }
}
</script>

<style scoped>

</style>
