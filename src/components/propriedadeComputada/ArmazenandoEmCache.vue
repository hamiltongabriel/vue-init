<template>
<div>
{{doubleValue}}
</div>
</template>
<script>
    export default{
        data:() => ({
            value: 10
        }),
        computed:{
            doubleValue(){
                console.log('doubleValue computed property changed');
                return this.value * 2
            }
        }
    }
</script>