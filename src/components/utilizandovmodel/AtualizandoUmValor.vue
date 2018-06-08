<template>
<div>
  <div>
    <input v-model="foodRequested" />
    <button @click="orderFood">Fazer pedido</button>
    <button @click="requestAFood">Solicitar Apenas 1</button>
  </div>
  <div>
    Quantidades de comidas solicitadas até o momento: {{quantityFoodFinal}}
  </div>
  
</div>
</template>
<script>
export default {
  data: () => ({
    foodRequested: 0,
    quantityFoodFinal: 0
  }),
  methods: {
    requestAFood() {
      this.quantityFoodFinal++;
    },
    orderFood() {
      this.quantityFoodFinal =
        parseInt(this.foodRequested) + parseInt(this.quantityFoodFinal);
    }
  }
};
</script>