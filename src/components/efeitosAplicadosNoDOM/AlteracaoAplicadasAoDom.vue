<template>
   <div>
   <!-- trannsitions são efeitos que podem ser aplicados quando elementos são inseridos,
atualizado e removido do DOM. -->
     <article>
       Nao sou fruta<br>
       Nao sou peixe.<br>
       Nao sou cachorro.<br>
       Nao sou nenhum desses.
       <div id="solution" @click="showSolution = true"> eu sou um <transition name="fade"><span id="dragon" v-show="showSolution">dragon</span> </transition></div>
     </article>
   </div>
</template>

<script>
export default {
  name: 'AlteracaoAplicadasAoDom',
  data: () => ({
    showSolution: false
  })
}
</script>

<style scoped>
#solution {
  cursor: pointer;
}
.fade-enter {
  opacity: 0
}
.fade-enter-active {
  transition: opacity .5s;
}
</style>
