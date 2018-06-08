<template>
    <div>
        <button @click="orderFood">Fazer pedido.</button>
    </div>
</template>
<script>
export default {
  methods: {
    orderFood() {
      alert("Seu pedido esta na mesa");
    }
  }
};
</script>
