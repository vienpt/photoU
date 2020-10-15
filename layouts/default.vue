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
