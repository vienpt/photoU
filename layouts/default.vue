<template>
  <div class="bg-repeat-y bg-cover bg-greywhite">
    <HeaderCenterSide />
    <HeroSection />
    <main id="content-section">
      <FeaturesSection />
      <section id="content" class="max-w-6xl px-3 py-6 mx-auto md:px-8">
        <!-- Replace with your content -->
        <Nuxt />
        <!-- /End replace -->
      </section>
      <TestimonialsSection />
      <CallToActionSection />
    </main>
    <Footer />
  </div>
</template>
<script>
export default {}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
