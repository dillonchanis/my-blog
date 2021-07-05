<template>
  <nav class="space-x-8">
    <GLink class="relative font-mono text-xl font-semibold text-white cursor-pointer nav__link" to="/">Home</GLink>
    <GLink class="relative font-mono text-xl font-semibold text-white cursor-pointer nav__link" to="/blog">Blog</GLink>
    <GLink class="relative font-mono text-xl font-semibold text-white cursor-pointer nav__link" to="/about/">About</GLink>
  </nav>
</template>

<script>
export default {
  name: 'SiteNavigation'
}
</script>

<style scoped>
.nav__link {
  background-image: linear-gradient(180deg, transparent 70%, #FE269C 0);
  background-position: 10px bottom;
  background-repeat: no-repeat;
  transition: all 0.15s ease;
}

.nav__link:hover {
  color: #FE269C;
  background-image: linear-gradient(180deg, transparent 100%, #FE269C 0);
  background-position: 1px bottom;
}
</style>