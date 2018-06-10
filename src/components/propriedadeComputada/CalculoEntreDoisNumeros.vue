<template>
<div>
    <h1>Adicione 2 Numeros.</h1>
    <form class="form-inline">
        <input v-model.number="a" class="form-control">
        +
        <input v-model.number="b" class="form-control">
    </form>
    <h2>Resultado: {{a}} + {{b}} = {{c}}</h2>
    <pre>{{ $data }}</pre>
</div>
</template>
<script>
export default {
  data: () => ({
    a: 1,
    b: 2
  }),
  computed: {
    c() {
      return this.a + this.b;
    }
  }
};
</script>
