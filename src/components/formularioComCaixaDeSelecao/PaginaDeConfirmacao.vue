<template>
  <div>
    {{ carUsing }}
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
        <!-- click.prevent = Evita submit do button -->
        <input type="submit" value="Salvar dados" @click.prevent="printHandler"/>
        <br>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PaginaDeConfirmacao',
  data: () => ({
    carUsing: []
  }),
  methods: {
    printHandler () {
      let printers = this.carUsing
      alert(`Salvando seus dados: ${(printers.length ? printers.join(', ') : 'none')}.`)
    }
  }
}
</script>

<style scoped>

</style>
