<template>
    <div>
        <ul>
            <li v-for="(valor, index, key) in dados" :key="key">{{index}}{{valor}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  data: () => ({
      dados:{
          firstName: 'Hamilton',
          lastName: 'gabriel',
          age: 19
      }
  })
}
</script>