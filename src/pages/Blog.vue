<template>
  <Layout>
    <main>
      <header>
        <div
          class="max-w-xl px-6 py-10 mx-auto text-center border-b border-gray-300 md:max-w-3xl xl:max-w-4xl md:py-32"
        >
          <h1 class="mb-1 font-sans text-4xl font-bold sm:text-5xl md:text-6xl">
            <GLink to="/" class="text-black">Blog</GLink>
          </h1>
          <p class="text-lg text-gray-700 sm:text-3xl">
            Thoughts, stories, and ideas.
          </p>
        </div>
      </header>
      <section>
        <AppPostItem
          v-for="edge in $page.posts.edges"
          :key="edge.node.id"
          :post="edge.node"
        />
      </section>
      <AppPagination
        :info="$page.posts.pageInfo"
        v-if="$page.posts.pageInfo.totalPages > 1"
      />
      <SiteFooter class="py-8 sm:py-16" />
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";

import AppPagination from '@/components/Pagination'
import AppPostItem from '@/components/PostItem'
import SiteFooter from '@/components/SiteFooter'

export default {
  components: {
    AppPagination,
    AppPostItem,
    SiteFooter
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        { property: "og:type", content: "website" },
        { property: "og:title", content: this.$static.metadata.siteName },
        {
          property: "og:description",
          content: this.$static.metadata.siteDescription,
        },
        { property: "og:url", content: this.$static.metadata.siteUrl },
        // { property: "og:image", content: this.ogImageUrl },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$static.metadata.siteName },
        {
          name: "twitter:description",
          content: this.$static.metadata.siteDescription,
        },
        { name: "twitter:site", content: "@dillonchanis" },
        { name: "twitter:creator", content: "@dillonchanis" },
        // { name: "twitter:image", content: this.ogImageUrl },
      ],
    };
  },
  computed: {
    config() {
      return config;
    },
    // ogImageUrl () {
    //   return `${this.config.siteUrl}/images/bleda-card.png`
    // }
  },
};
</script>

<page-query>
  query Home ($page: Int) {
    posts: allPost (page: $page, perPage: 6) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          timeToRead
          datetime: date (format: "YYYY-MM-DD HH:mm:ss")
          content
          excerpt
          description
          path
          cover
        }
      }
    }
  }
</page-query>

<static-query>
query {
  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</static-query>
