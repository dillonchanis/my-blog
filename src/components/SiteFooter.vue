<template>
  <footer
    class="flex flex-wrap justify-between max-w-3xl px-6 mx-auto text-sm leading-normal text-gray-700 sm:px-12"
  >
    <div class="w-full mb-4 sm:w-1/2 sm:mb-0">
      <p>
        <a
          href="https://twitter.com/dillonchanis"
          class="transition-colors duration-300 border-b border-transparent hover:border-gray-400"
        >
          @dillonchanis
        </a>
      </p>
      <p>
        My thoughts are my own.
      </p>
    </div>
    <div class="w-full sm:w-1/2">
      <nav>
        <ul class="flex -mx-2 sm:justify-end">
          <li class="px-2">
            <GLink
              to="/"
              class="transition-colors duration-300 border-b border-transparent hover:border-gray-400"
            >
              Home
            </GLink>
          </li>
          <li class="px-2">
            <a
              href="/sitemap.xml"
              class="transition-colors duration-300 border-b border-transparent hover:border-gray-400"
            >
              Sitemap
            </a>
          </li>
          <li class="px-2">
            <a
              href="/feed.xml"
              class="transition-colors duration-300 border-b border-transparent hover:border-gray-400"
            >
              RSS Feed
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "SiteFooter",
};
</script>
