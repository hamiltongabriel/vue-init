<template>
    <div>
        {!msg!}
    </div>
</template>
<script>
    export default{
        data:() => ({
            msg: 'Hello World'
        }),
        delimiters: ['{%','%}']
    }
</script>
