<template>
  <div>
    <form>
      <fieldset>
        <legend>Qual carro voce usa?</legend>
        <label>
          <input type="checkbox" v-model="carUsing" value="uno">
          Uno<br>
        </label>
        <label>
          <input type="checkbox" v-model="carUsing" value="corsa">
          Corsa <br>
        </label>
        <label>
          <input type="checkbox" v-model="carUsing" value="corola">
          Corola <br>
        </label>
        <input type="submit" value="Print now">
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaginaDeConfirmacao',
  data: () => ({
    carUsing: []
  })
}
</script>

<style scoped>

</style>
