<template>
  <div>
    <link rel="stylesheet" href="animate.min.css">
    <button @click="taxiCalled = true">
      Call a Cab
    </button>
    <transition
      enter-active-class="animated slideInRight">
      <p v-if="taxiCalled">🚕</p>
    </transition>
  </div>
</template>

<script type="text/javascript">

export default {
  extends: {},
  mixins: [],
  name: 'Taxi',
  components: {},
  props: {},
  data: () => ({
    taxiCalled: false
  }),
  computed: {},
  methods: {}
}
</script>

<style scoped>
</style>
