<template>
  <div>
    <h3>Lista de Experiências</h3>
    <ul>
      <li v-for="(exp, key) in experiments" :key="key">
        {{exp.name}} ( R$ {{exp.cost}})
      </li>
    </ul>
    <h3>Elementos Não Físicos</h3>
    <ul>
      <li v-for="(exp,key) in nonPhysics" :key="key">
        {{exp.name}} ( R$ {{exp.cost}})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FiltrandoLista',
  data: () => ({
    experiments: [
      {name: 'RHIC Ion Collider', cost: 650, field: 'Physics'},
      {name: 'Neptune Undersea Observatory', cost: 100, field: 'Biology'},
      {name: 'Violinist in the Metro', cost: 3, field: 'Psychology'},
      {name: 'Large Hadron Collider', cost: 7700, field: 'Physics'},
      {name: 'DIY Particle Detector', cost: 0, field: 'Physics'}
    ]
  }),
  computed: {
    nonPhysics () {
      return this.experiments.filter(exp => exp.field !== 'Physics')
    }
  }
}
</script>

<style scoped>

</style>
