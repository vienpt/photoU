<template>
  <div>
    <div class="container flex flex-wrap px-5 py-20 mx-auto">
      <div class="flex flex-col w-full mb-20 text-center">
        <h2
          class="mb-1 text-base font-medium tracking-widest text-black title-font"
        >
          THIS IS A USEFUL SMALL TEXT
        </h2>
        <h1 class="text-3xl font-medium text-black sm:text-3xl title-font">
          Tell them something about this cards.
        </h1>
        <div
          class="container flex flex-col items-center justify-center h-auto px-10 py-10 mx-auto"
        >
          <img
            class="object-cover object-center w-full mb-10 rounded md:w-5/6"
            alt="hero"
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
          />
        </div>
      </div>
    </div>
    <FeaturesSection />
    <div class="container py-20 mx-auto">
      <h1 class="mx-auto bg-green-500 title">photoU</h1>
    </div>
    <TestimonialsSection />
  </div>
</template>

<script>
export default {}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
