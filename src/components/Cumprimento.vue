<template>
 <div>
  Olá para {{ countCitys }} cidades.<br/>
  Hello {{ countCitys }} worlds
 </div>
</template>
<script>
 export default{
     //vinculacao de dados.
  data:()=>({
   countCitys: 5 + 2
  })
}
</script>