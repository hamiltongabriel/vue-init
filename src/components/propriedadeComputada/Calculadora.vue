<template>
<div>
    <h1>Adicione 2 Numeros.</h1>
    <form class="form-inline">
        <input v-model.number="a" class="form-control">
        <select v-model="operator" class="form-control">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
        <input v-model.number="b" class="form-control">
    </form>
    <h2>Resultado: {{a}} {{operator}} {{b}} = {{c}}</h2>
    <pre>{{ $data }}</pre>
</div>
</template>
<script>
export default {
  data: () => ({
    a: 1,
    b: 2,
    operator: "+"
  }),
  computed: {
    c() {
      switch (this.operator) {
        case "+":
          return this.a + this.b;
          break;
        case "-":
          return this.a - this.b;
          break;
        case "*":
          return this.a * this.b;
          break;
        case "/":
          return this.a / this.b;
          break;
      }
    }
  }
};
</script>
