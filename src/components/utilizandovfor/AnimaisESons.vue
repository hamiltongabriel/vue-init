<template>
    <div>
        <ul>
            <li v-for="(animais, key) in animals" :key="key">
                O {{animais.typeAnimal}} faz {{animais.sound}}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data: () => ({
    animals: [
      {
        typeAnimal: "Gato",
        sound: "Meow"
      },
      {
        typeAnimal: "Passarinho",
        sound: "Tweet"
      },
      {
        typeAnimal: "Cachorro",
        sound: "Au Au"
      }
    ]
  })
};
</script>

