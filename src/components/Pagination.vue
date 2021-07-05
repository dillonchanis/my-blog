<template>
  <section
    class="max-w-3xl px-6 py-16 mx-auto border-b border-gray-300 md:px-8"
  >
    <nav role="navigation" aria-label="pagination">
      <ul class="flex items-center justify-between sm:text-lg lg:text-xl">
        <li class="lg:w-1/5">
          <GLink
            class="px-4 py-2 text-gray-700 transition-colors duration-300 hover:text-black"
            :to="previousPage"
            :class="{ 'pointer-events-none opacity-0': info.currentPage === 1 }"
            :rel="info.currentPage === 1 ? 'nofollow' : 'prev'"
          >
            &larr; Previous
          </GLink>
        </li>
        <li class="hidden w-auto text-base text-center text-gray-600 md:flex">
          Page {{ info.currentPage }} of {{ info.totalPages }}
        </li>
        <li class="text-right lg:w-1/5">
          <GLink
            class="px-4 py-2 text-gray-700 transition-colors duration-300 hover:text-black"
            :to="nextPage"
            :class="{
              'pointer-events-none opacity-0':
                info.currentPage === info.totalPages,
            }"
            :rel="info.currentPage === info.totalPages ? 'nofollow' : 'next'"
          >
            Next &rarr;
          </GLink>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  props: {
    basePath: {
      type: String,
      default: ''
    },
    info: {
      type: Object,
      default: () => {
        return {
          totalPages: 0,
          currentPage: 0
        }
      }
    }
  },
  computed: {
    nextPage() {
      return this.info.totalPages > this.info.currentPage
        ? `${this.basePath}/${currentPage + 1}/`
        : `${this.basePath}/${currentPage}/`;
    },
    previousPage() {
      return [0, 1].includes(this.info.currentPage - 1)
        ? `${this.basePath}/`
        : `${this.basePath}/${currentPage - 1}/`
    }
  }
};
</script>
