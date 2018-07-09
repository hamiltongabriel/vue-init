<template>
  <div>
    {{choosenCountry}}
    <fieldset>
      <select v-model="clan">
        <option v-for="(types, clan) in clans">{{ clan }}</option>
      </select>
      <select v-model="type">
        <option v-for="(species, type) in clans[clan]">{{type}}</option>
      </select>
      <select>
        <option v-for="(animals, species) in clans[clan]">{{species}}</option>
      </select>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'FormSelecionarElemento',
  data: () => ({
    clan: undefined,
    type: undefined,
    clans: {
      mammalia: {
        'have fingers': {
          human: 'humanos',
          chimpanzee: 'chimpanzé'
        },
        'fingerless': {
          cat: 'gato',
          bear: 'urso'
        }
      },
      birds: {
        flying: {
          eagle: 'Aguia',
          pigeon: 'Pombo'
        },
        'non flying': {
          chicken: 'galinha'
        }
      }
    }
  })
}
</script>

<style scoped>

</style>
