<template>
  <Layout>
    <main>
      <article
        class="max-w-xl px-6 pt-16 pb-10 mx-auto mb-16 border-b md:max-w-2xl xl:max-w-3xl sm:px-12 border-grey-lighter"
      >
        <div
          :class="{ 'pb-10': $page.post.tags }"
          class="prose"
          v-html="$page.post.content"
        />

        <footer v-if="$page.post.tags" class="flex flex-wrap pb-10 sm:pb-16">
          <div>
            <GLink
              v-for="tag in $page.post.tags"
              :key="tag.id"
              :to="`${tag.path}/`"
              class="inline-block px-4 py-2 mb-2 mr-4 font-sans text-xs font-bold text-teal-400 transition-colors duration-300 border border-teal-400 rounded-full hover:text-white hover:bg-teal-400 sm:text-sm"
            >
              <svg
                class="inline w-3 mr-1 align-middle fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                role="img"
              >
                <path
                  d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                />
              </svg>
              {{ tag.title }}
            </GLink>
          </div>
        </footer>
      </article>
    </main>
  </Layout>
</template>

<script>
import config from "~/.temp/config.js";

export default {
  // components: {
  // },
  metaInfo() {
    return {
      title: `${this.$page.post.title} ${
        this.$page.post.tag ? "- " + this.$page.post.tag.name : ""
      }`,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description(this.$page.post),
        },

        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        {
          property: "og:description",
          content: this.description(this.$page.post),
        },
        { property: "og:url", content: this.postUrl },
        // { property: "article:published_time", content: moment(this.$page.post.date).format('YYYY-MM-DD') },
        // { property: "og:image", content: this.ogImageUrl },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: this.$page.post.title },
        {
          name: "twitter:description",
          content: this.description(this.$page.post),
        },
        { name: "twitter:site", content: "@dillonchanis" },
        { name: "twitter:creator", content: "@dillonchanis" },
        // { name: "twitter:image", content: this.ogImageUrl },
      ],
    };
  },
  methods: {
    description(post, length, clamp) {
      if (post.description) {
        return post.description;
      }

      length = length || 280;
      clamp = clamp || " ...";
      let text = post.content
        .replace(/<pre(.|\n)*?<\/pre>/gm, "")
        .replace(/<[^>]+>/gm, "");

      return text.length > length ? `${text.slice(0, length)}${clamp}` : text;
    },
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    },
  },
  computed: {
    config() {
      return config;
    },
    postUrl() {
      let siteUrl = this.config.siteUrl;
      let postPath = this.$page.post.path;

      // return postPath ? `${siteUrl}${postPath}` : `${siteUrl}/${slugify(this.$page.post.title)}/`
      return "";
    },
    ogImageUrl() {
      return (
        this.$page.post.cover || `${this.config.siteUrl}/images/bleda-card.png`
      );
    },
  },
};
</script>

<page-query>
query Post ($path: String) {
  post (path: $path) {
    title
    path
    slug
    datetime: date (format: "YYYY-MM-DD HH:mm:ss")
    content
    description
    timeToRead
    cover
    tags {
      id
      title
      path
    }
  }
}
</page-query>
