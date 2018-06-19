<template>
   <div>
     <div v-show="isNight">
       Ta me vendo!
     </div>
   </div>
</template>

<script>
export default {
  name: 'UtilizandoVShow',
  computed: {
    // aparecera so antes das 7.
    isNight () {
      return new Date().getHours() < 7
    }
  }
}
</script>

<style scoped>

</style>
