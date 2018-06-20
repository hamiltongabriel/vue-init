<template>
<div v-html="htmlTexts[0]">
</div>
</template>

<script>
export default {
  name: 'SaidaDeHtmlBruto',
  data: () => ({
    htmlTexts: [
      'Dear John,<br/>thank you for the <pre>Batman vs Superman</pre> DVD!',
      'Dear John,<br/>thank you for <i>Ghostbusters 3</i>!',
      'Dear John,<br/>thanks, <b>Gods of Egypt</b> is my new favourite!'
    ]
  })
}
</script>

<style scoped>

</style>
