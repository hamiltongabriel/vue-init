<template>
    <div>
        <ul>
            <li v-for="(valor, key, index) in dados" :key="key">{{index}}. {{valor}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data:() => ({
        dados:{
            firstName: 'Hamilton',
            lastName: 'Gabriel',
            age: 19
        }
    })
}
</script>