<template>
    <div>
        a = {{ a }}, b = {{ b }}
        <input v-model.number="a"/>
        <pre>
            {{$data | json}}
        </pre>
    </div>
</template>s
<script>
export default {
  data: () => ({
    a: 1
  }),
  computed: {
    b() {
      return parseInt(this.a) + parseInt(1);
    }
  }
};
</script>