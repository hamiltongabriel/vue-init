<template>
<div>
    <button @click="orderFood">Fazer pedido</button>
    <input v-model="foodRequested" />Quantidades de comidas solicitadas até o momento: {{quantityFoodFinal}}
</div>
</template>
<script>
export default {
//Usamos v-model para manter uma atualizacao real (fazendo uma vinculacao de dados bidirecional em 2 sentidos.)
  data: () => ({
      foodRequested: 0,
      quantityFoodFinal: null
  }),
  methods:{
    orderFood(){
        this.quantityFoodFinal = `${this.foodRequested}` + `${this.quantityFoodFinal}`;
    }
  }
};
</script>