<template>
    <div>
        <!--Renders as "The value is 1"-->
        <!--After 2 seconds, re-renders as "The value is 2"-->
    {{message}}
    </div>
</template>
<script>
export default {
  data: () => ({
    val: 1
  }),
  computed: {
    message() {
      return `The value is ${this.val}`;
    }
  },
  mounted() {
    setTimeout(() => {
      this.val = 2;
    }, 2000);
  }
};
</script>
