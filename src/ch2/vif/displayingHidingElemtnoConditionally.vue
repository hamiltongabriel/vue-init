<template>
  <div>
    <div v-show="isNight">
      I'm a ghost! Boo!
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isNight: true
  }),
  computed: {
    isNight () {
      return new Date().getHours() < 7
    }
  }
}
</script>
