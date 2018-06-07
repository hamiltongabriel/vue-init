<template>
    <div>
        <ul>
            <li v-for="(n, key) in counteDown" :key="key">{{n}}</li>
            <li>Lançar Míssil!</li>
        </ul>
    </div>
</template>
<script>
export default {
  data: () => ({
    counteDown: []
  }),
  created() {
    var counter = 10;
    
    setInterval(() => {
      counter > 0 ? this.counteDown.push(counter--) : "";
    }, 1000);
  }
};
</script>