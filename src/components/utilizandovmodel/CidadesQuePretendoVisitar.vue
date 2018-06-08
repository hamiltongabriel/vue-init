<template>
    <div>
        Cidades que pretendo Visitar.
        <ul>
            <li v-for="(city, key, i) in citys" :key="key">{{city}}
            <button @click="citys.splice(i, 1)">Remover Cidade</button></li>
        </ul>
        <input v-model="newCity"/>
        <button @click="addCity">Adicionar nova cidade</button>
    </div>
</template>
<script>
export default {
  data: () => ({
    citys: ["Vitoria", "Bahia", "Floripa"],
    newCity: []
  }),
  methods: {
    removeCity() {
      this.citys.splice(i, 1);
    },
    addCity() {
      this.citys.push(this.newCity);
    }
  }
};
</script>
