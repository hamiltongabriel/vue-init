<template>
<div>
    <button @click="orderFood">Fazer pedido</button>
    <input v-model="foodRequested" />Quantidades de comidas solicitadas até o momento: {{quantityFoodFinal}}
</div>
</template>
<script>
export default {
  data: () => ({
      foodRequested: 0,
      quantityFoodFinal: 0
  }),
  methods:{
    orderFood(){
        this.quantityFoodFinal = parseInt(this.foodRequested) + parseInt(this.quantityFoodFinal)
    }
  }
};
</script>