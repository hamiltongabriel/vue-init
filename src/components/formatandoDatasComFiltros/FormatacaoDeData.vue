<template>
  <div>
    O Storming da Bastilha, aconteceu em {{bastilleStormingDate}}
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'FormatacaoDeData',
  data: () => ({
    bastilleStormingDate: '1789-07-14 17 h'
  }),
  filter: {
    date (date) {
      return moment(date).format('LL')
    }
  }
}
</script>

<style scoped>

</style>
