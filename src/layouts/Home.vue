<template>
  <div>
    <div class="relative">
      <header class="flex items-center justify-center py-5">
        <SiteNavigation />
      </header>
      <div id="particles" class="absolute w-full"></div> 
    </div>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SiteNavigation from '@/components/SiteNavigation'
const particles = require('particles.js')

export default {
  components: { SiteNavigation },
  mounted() {
    particlesJS.load('particles', '/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
</script>
