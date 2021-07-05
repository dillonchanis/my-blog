<template>
  <HomeLayout>
    <main class="relative w-full min-h-screen mt-16">
      <div
        id="banner"
        class="relative w-full h-full min-h-screen text-center bg-cover banner"
      >
        <h1 class="leading-none text-white name font-hot-rush-sans-striped">
          Dillon Chanis
        </h1>
        <h2 class="block -mt-8 text-5xl text-pink-400 font-hot-rush-script">
          Software Engineer
        </h2>
      </div>

      <section class="w-full py-16">
        <div class="max-w-2xl mx-auto">
          <h3 class="text-6xl text-pink-400 font-hot-rush-sans">About Me</h3>
          <p class="mt-1 text-xl leading-8 text-white">
            I am a senior software engineer. I mainly focus on front-end
            architecture and tooling. I am proficient in Vue, React, Angular and
            TypeScript. I also enjoy working with other languages like Rust.
          </p>

          <p class="mt-4 text-xl leading-8 text-white">
            Outside of development, I am an advocate for veganism and battling
            climate change. In my free time, I enjoy playing Pokemon TCG and
            World of Warcraft.
          </p>

          <div class="mt-6">
            <GLink class="inline-block px-4 py-1.5 font-mono text-sm font-bold text-center text-gray-900 bg-pink-400 border-2 rounded-sm cursor-pointer button" to="/blog">
              Check out my blog
            </GLink>
          </div>
        </div>
      </section>
    </main>
  </HomeLayout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
  },
};
</script>

<style>
.name {
  font-size: 100px;
  text-shadow: 1px 1px 0 #75529e;
}

.button {
  border-color: #fff;
  box-shadow: 4px 4px 0 #fff;
}

.banner {
  background-image: url(/city.png);
  background-position: 45% 0;
}
</style>
