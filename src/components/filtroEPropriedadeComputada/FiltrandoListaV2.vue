<template>
  <div>
    <h3>Lista de Experimentos</h3>
    <ul>
      <li v-for="(exp, key) in nonPhysics(lowCost(experiments))" :key="key">
        {{exp.name}} (R$ {{exp.cost}})
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FiltrandoListaV2',
  data: () => ({
    experiments: [
      {name: 'RHIC Ion Collider', cost: 650, field: 'Physics'},
      {name: 'Neptune Undersea Observatory', cost: 100, field: 'Biology'},
      {name: 'Violinist in the Metro', cost: 3, field: 'Psychology'},
      {name: 'Large Hadron Collider', cost: 7700, field: 'Physics'},
      {name: 'DIY Particle Detector', cost: 0, field: 'Physics'}
    ]
  }),
  methods: {
    // fazendo filtro se tornar mais especifico de forma composta e avancado.
    nonPhysics (list) {
      return list.filter(exp => exp.field !== 'Physics')
    },
    lowCost (list) {
      return list.filter(exp => exp.cost <= 3)
    }
  }
}
</script>

<style scoped>

</style>
