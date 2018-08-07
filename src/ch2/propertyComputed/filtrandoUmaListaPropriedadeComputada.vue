<template>
    <div>
        <h3>List of expensive experiments</h3>
        <ul>
            <li v-for="(exp, key) in experiments" :key="key">
                {{exp.name}} ({{exp.cost}} m €)
            </li>
        </ul>
        <h2>Conteudos Nao Fisicos</h2>
        <ul>
            <li v-for="(exp, key) in nonPhysic" :key="key">
                {{exp.name}} ({{exp.cost}} m €)
            </li>
        </ul>
        <h2>Conteudos Nao Fisicos com valor menor de 3.000.000</h2>
        <ul>
            <li v-for="(exp, key) in filteredExperiments" :key="key">
                {{exp.name}} ({{exp.cost}} m €)
            </li>
        </ul>
        <h2>Numeros Positivos</h2>
        <ul>
            <li v-for="(numerosPositivos, key) in notNegative" :key="key">
                {{numerosPositivos}}
            </li>
        </ul>
        <h2>Encontrando valores verdadeiros em uma matriz</h2>
        <ul>
            <li v-for="(valorVerdadeiro, key) in valueTrue" :key="key">
                {{valorVerdadeiro}}
            </li>
        </ul>
         <h2>Encontrando valores Falsos em uma matriz</h2>
        <ul>
            <li v-for="(valorFalso, key) in valueFalse" :key="key">
                {{valorFalso}}
            </li>
        </ul>
        <input v-model="term">
    </div>
</template>
<script>
export default {
  data: () => ({
    array: [0, 1, "0", false, true, "hello"],
    numbers: [2, 7, 6, 5, 11, 23, 12],
    experiments: [
      { name: "RHIC Ion Collider", cost: 650, field: "Physics" },
      { name: "Neptune Undersea Observatory", cost: 100, field: "Biology" },
      { name: "Violinist in the Metro", cost: 3, field: "Psychology" },
      { name: "Large Hadron Collider", cost: 7700, field: "Physics" },
      { name: "DIY Particle Detector", cost: 0, field: "Physics" }
    ],
    term: ""
  }),
  // Removendo os itens fisicos.
  // Filter retorna outro array com apenas os dados solicitados.
  computed: {
    allExceptTerm() {
      return this.experiments.filter(
        exp => exp.field.indexOf(this.term) === -1
      );
    },
    notNegative() {
      return this.numbers.filter(x => x % 2 === 0);
    },
    valueTrue() {
      return this.array.filter(Boolean);
    },
    valueFalse() {
      return this.array.filter(x => !x);
    },
    nonPhysic() {
      return this.experiments.filter(exp => exp.field !== "Physics");
    },
    filteredExperiments(){
        return this.lowCost(this.nonPhysics(this.experiments))
    }
    
  },
  methods: {
    lowCost(list) {
        debugger
      return list.filter(exp => exp.cost <= 3);
    },
    nonPhysics(list) {
        debugger
      return list.filter(exp => exp.field !== "Physics");
    }
  }
};
</script>

