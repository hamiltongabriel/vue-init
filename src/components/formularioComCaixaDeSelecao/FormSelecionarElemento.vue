<template>
  <div>
    {{choosenCountry}}
    <fieldset>
      <select v-model="clan">
        <!-- Create menu suspense-->
        <option v-for="(types, clan) in clans">{{ clan }}</option>
      </select>
      <!--Preenchendo o tipo de uma determinada clan-->
      <select v-model="type">
        <option v-for="(species, type) in clans[clan]">{{type}}</option>
      </select>
      <!--Se a variavel lan tiver valor, o select permite escolher o tipo animal-->
      <!--Como os clans sao indefinidos ira emitir um erro, usamos um v-if para solucionar o problema-->
      <select>
        <option v-for="(animals, species) in clans[clan][type]">{{species}}</option>
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
