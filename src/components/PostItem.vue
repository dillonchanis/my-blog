<template>
  <article>
    <div class="max-w-3xl px-6 mx-auto">
      <div class="py-8 border-b border-gray-300 sm:py-20">
        <header class="mb-8 text-center">
          <time
            :datetime="post.datetime"
            class="mb-2 text-xs text-gray-700 uppercase"
          >
            {{ post.datetime }}
          </time>
          <h2 class="mb-1 font-sans text-3xl leading-tight sm:text-4xl sm:mb-2">
            <GLink :to="`${post.path}/`" class="font-bold text-black">
              {{ post.title }}
            </GLink>
          </h2>
          <p class="text-sm leading-normal text-gray-700 sm:text-base">
            {{ post.timeToRead }} min read
          </p>
        </header>
        <PostExcerpt :text="post.content" />
      </div>
    </div>
  </article>
</template>

<script>
import PostExcerpt from "./PostExcerpt.vue";

export default {
  components: {
    PostExcerpt,
  },
  props: {
    post: {
      required: true,
    },
  },
  methods: {
    titleCase(str) {
      return str
        .replace("-", " ")
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    },
  },
  computed: {},
};
</script>
