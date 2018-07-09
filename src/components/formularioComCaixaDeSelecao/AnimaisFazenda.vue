<template>
  <div>
    <form action="">
      <fieldset>
        <legend>Diario de Animais Cadastrados: </legend>
        <label>
          <input type="radio" v-model="animal" :value="animals[animalsAleatory]" />
          {{animals[animalsAleatory]}}
        </label>
        <br>
        <label>
          <input type="radio" v-model="animal" :value="animals[animalsAleatory+1]" />
          {{animals[animalsAleatory+1]}}
        </label>
        <br>
        <input type="submit" value="Adicionar a fazenda" @click.prevent="addToFarm">
      </fieldset>
    </form>
    <div>
      Your farm is composed by {{ farm.join(' ') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimaisFazenda',
  data: () => ({
    animals: ['🐖', '🐔', '🐂'],
    animal: undefined,
    farm: [],
    animalsAleatory: 0
  }),
  methods: {
    addToFarm () {
      if (this.animal === undefined) { return }
      this.farm.push(this.animal)
      this.animalsAleatory = Math.floor(Math.random() * (this.animals.length - 1))
      this.animal = undefined
      console.log(this.farm)
    }
  }
}
</script>

<style scoped>

</style>
