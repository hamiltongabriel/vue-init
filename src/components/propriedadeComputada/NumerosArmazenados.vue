<template>
    <div>
        <p>Soma dos numeros: {{ numberTotal }}</p>
    </div>
</template>
<script>
    export default{
        data:() => ({
            numbers: [5, 8, 3]
        }),
        computed:{
            numberTotal(){
                return this.numbers.reduce((sum, val) => sum + val)
            }
        }
    }
</script>