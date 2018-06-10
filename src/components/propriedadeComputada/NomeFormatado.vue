<template>
<div>
    <p>{{ nomeFormatado }}</p>
    <label>Dado a ser computado</label>
    <input type="text" v-model="nome">
</div>
</template>
<script>
export default {
  data: () => ({
    nome: "Hamilton Gabriel"
  }),
  computed: {
    nomeFormatado() {
      console.log("Exemplo Computado");
      return this.nome.toUpperCase();
    }
  }
};
</script>