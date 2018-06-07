<template>
    <div>
        <ul>
            <li v-for="(n, key) in countDown" :key="key">{{ n }}</li>
            <li>Lançar Míssil.</li>
        </ul>
    </div>
</template>
<script>
    export default{
        data:() => ({
            countDown: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
        })
    }
</script>