<template>
  <div>
    <h3>Lista de Aniversariante</h3>
    <ul>
      <li v-for="(exp, key) in experiments" :key="key">
        {{exp.name}}: Data de Aniversário: {{exp.field}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FiltrandoLista',
  data: () => ({
    experiments: [
      {name: 'Mariana Silva Brito', cost: 650, field: '16/6/1999'},
      {name: 'Hamilton Gabriel Macedo Pinheiro', cost: 100, field: 'Biology'},
      {name: 'Rafael Vinicios Macedo Pinheiro', cost: 3, field: 'Psychology'},
      {name: 'Francisco Pontes Bernal', cost: 7700, field: 'Physics'},
      {name: 'Maria Rosa Macedo de Souza', cost: 0, field: 'Physics'}
    ],
    hours: `${new Date().getDate()}/${new Date().getDay()}/${new Date().getFullYear()}`,
    dia: new Date().getDate(),
    mes: new Date().getDay()
  }),
  methods: {
    verificandoMeses () {
      for (var i = 0, max = this.experiments.length; i < max; i++) {
        this.experiments[i].length > 1 ? this.meses() : this.mesUnitario()
      }
    },

    meses () {
      if (this.dia.toString() === this.experiments[0].field.substring(0, 2) &&
        this.mes.toString() === this.experiments[0].field.substring(3, 5)) {
        alert('Sim')
      }
    },
    mesUnitario () {
      if (this.dia.toString() === this.experiments[0].field.substring(0, 2) &&
        this.mes.toString() === this.experiments[0].field.substring(3, 4)) {
        alert('Sim')
      }
    }
  },
  mounted () {
    this.verificandoMeses()
  }
}
</script>

<style scoped>

</style>
