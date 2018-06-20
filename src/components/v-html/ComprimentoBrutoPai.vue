<template functional>

</template>

<script>
export default {
  name: 'ComprimentoBrutoPai',
  props: {
    gift: String,
    decoration: String
  },
  methods: {
    render (createElement, context) {
      let decoratedGift = createElement(context.props.decoration, context.props.gift)
      return createElement('p', ['Hamilton Gabriel, testando ', decoratedGift])
    }
  }
}
</script>

<style scoped>

</style>
