<template>
  <div>
    <textarea
      v-model="memeText"
      :class="{ warn: longText }"
      :maxlength="limit">
    </textarea>
    {{memeText.length}}
  </div>
</template>

<script>
export default {
  name: 'FundamentosDeEstilo',
  data: () => ({
    memeText: 'What if I told you ' +
    'CSS can do that',
    limit: 50
  }),
  computed: {
    longText () {
      if (this.limit - this.memeText.length <= 10){
        return true
      } else {
        return false;
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
