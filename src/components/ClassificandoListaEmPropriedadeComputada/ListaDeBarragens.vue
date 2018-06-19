<template>
  <div>
    <h3>Maiores Barragens</h3>
    <table>
      <thead>
      <tr>
        <th>Nome</th>
        <th>País</th>
        <th>Eletrecidade</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(dam, key) in damsByElectricity" :key="key">
          <td>{{dam.name}}</td>
          <td>{{dam.country}}</td>
          <th v-bind:class="order === 1 ? 'descending' : 'ascending'" @click="sort">{{dam.electricity}}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default{
  data: () => ({
    dams: [
      {name: 'Nurek Dam', country: 'Tajikistan', electricity: 3200},
      {name: 'Three Gorges Dam', country: 'China', electricity: 22500},
      {name: 'Tarbela Dam', country: 'Pakistan', electricity: 3500},
      {name: 'Guri Dam', country: 'Venezuela', electricity: 10200}
    ],
    order: 1
  }),
  computed: {
    damsByElectricity () {
      return this.dams.sort((d1, d2) => d2.electricity - d1.electricity *  this.order)
    }
  },
  methods: {
    sort () {
      this.order = this.order * -1
    }
  }
}
</script>
<style>
  .ascending:after {
    content: "25B2"
  }
  .descending:after {
    content: "25BC"
  }
</style>
