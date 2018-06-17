<template>
 <div>
  Olá para {{ countCitys }} cidades.<br/>
  Hello {{ countCitys }} worlds
 </div>
</template>
<script>
export default{
  // vinculacao de dados reativas e interpolacao...
  data: () => ({
    countCitys: 5 + 2
  })
}
</script>
