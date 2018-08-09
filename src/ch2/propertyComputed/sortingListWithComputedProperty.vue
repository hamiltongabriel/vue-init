<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th v-bind:class="order === 1 ? 'descending' : 'ascending'" @click="sort">Electricity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(dam, key) in damsByElectricity" :key="key">
          <td>{{dam.name}}</td>
          <td>{{dam.country}}</td>
          <td>{{dam.electricity}} MegaWatts</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data: () => ({
    dams: [
      { name: "Nurek Dam", country: "Tajikstan", electricity: 3200 },
      { name: "Three Gorges", country: "China", electricity: 22500 },
      { name: "Tarbela Dam", country: "Pakistan", electricity: 3500 },
      { name: "Guri Dam", country: "Venezuela", electricity: 1020 }
    ],
    // Ordem 1 -> Subir -1 Descer
    order: 1
  }),
  methods: {
    sort () {
      this.order = this.order * -1
    }
  },
  computed: {
    // Cria 1 clone da matriz dams.
    // Se a lista original nao for alterada, a função nao será alterada e o resultado em cache será retornado.
    damsByElectricity(){
      debugger
      // Sort ordena um Array
      // O valor do retorno deve ser um numero positivo se o segundo membro for após o primeiro, ou um numero
      // negativo, se o oposto for verdadeiro.
      return this.dams.sort((d1, d2) => 
      (d2.electricity - d1.electricity) * this.order);
    }
  }
};
</script>
<style scoped>
.ascending:after{
  content: "25B2"
}
.descending:after{
  content: "25BC"
}
</style>

