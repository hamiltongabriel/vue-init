<template>
    <div>
        <p>Nome Computado: {{nomeFormatado}}</p>
        <label>Nome a ser computado:</label>
        <input type="text" v-model="nomeFormatado">
    </div>
</template>
<script>
export default {
  data: () => ({
    nome: "Hamilton Gabriel"
  }),
  computed: {
    nomeFormatado: {
      get() {
        console.log("Usando Computed");
        return this.nome.toUpperCase();
      },
      set(novoValor) {
        return (this.nome = novoValor.substring(0, 3));
      }
    }
  }
};
</script>