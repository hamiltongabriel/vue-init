<template>
  <div>
    {{gender}}
    <form>
      <fieldset>
        <legend>Selecione seu Sexo: </legend>
        <label>
          <input type="radio" v-model="gender":value="genders[0]">
        </label>
        <br>
        <label>
          <input type="radio" v-model="gender":value="genders[1]"/>
        </label>
        <br>
        <label>
          <input type="radio" v-model="gender":value="genders[2]">
        </label>
        <br>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormularioApenasUmaOpcao',
  data: () => ({
    genders: ['♂: Homem', '♀️: Mulher', '👽: Alien'],
    gender: undefined
  })
}
</script>

<style scoped>

</style>
