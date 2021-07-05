<template>
  <div class="max-w-3xl px-5 mx-auto">
    <header class="flex items-center justify-center py-5">
      <nav class="space-x-8 nav">
        <SiteNavigation />
      </nav>
    </header>
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
  components: { SiteNavigation },
}
</script>
