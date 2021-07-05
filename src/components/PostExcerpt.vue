<template>
  <p class="px-2 text-lg leading-normal text-gray-700 sm:px-4 md:px-10">
    {{ excerpt }}
  </p>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    excerpt() {
      const length = 180;
      const clamp = "...";
      const text = this.text
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");
      
      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    }
  }
}
</script>