<template>
    <div>
        <p>Cat Object: {{ cat }}</p>
    </div>
</template>
<script>
export default {
  data: () => ({
    cat: {
      sound: "meow"
    }
  })
};
</script>