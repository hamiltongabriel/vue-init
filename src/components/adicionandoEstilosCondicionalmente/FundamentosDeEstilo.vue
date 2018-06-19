<template>
  <div>
    <textarea
      v-model="memeText"
      :class="{ warn: longText }"
      :maxlength="limit">
    </textarea>
    {{memeText.length}}/{{this.limit}}
  </div>
</template>

<script>
export default {
  name: 'FundamentosDeEstilo',
  data: () => ({
    memeText: 'Ola, eu sou Hamilton Gabriel ' +
    '',
    limit: 50
  }),
  computed: {
    longText () {
      if (this.limit - this.memeText.length <= 10){
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped>
  .warn {
    background-color: mistyrose
  }
</style>
