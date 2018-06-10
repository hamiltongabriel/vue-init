<template>
    <div>
        <p>
            Soma dos Numeros: {{ numberTotal }}
        </p>
    </div>
</template>
<script>
export default {
  data: () => ({
    numbers: [5, 8, 3]
  }),
  computed: {
    numberTotal: {
      get() {
        return this.numbers.reduce((sum, val) => sum + val);
      },
      set(newValue){
          const oldValue = this.numberTotal;
          const difference = newValue - oldValue;
          this.numbers.push(difference)
      }
    }
  }
};
</script>