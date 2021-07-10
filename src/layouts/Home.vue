<template>
  <div>
    <div class="relative">
      <header class="flex items-center justify-center py-5">
        <SiteNavigation />
      </header>
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

export default {
  components: { SiteNavigation }
}
</script>
