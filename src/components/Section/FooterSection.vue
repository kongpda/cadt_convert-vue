<template lang="">
    <InfoSection />
    <section class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </section>
</template>
<script>
import InfoSection from './InfoSection.vue'
export default {
    name: 'FooterSection',
    components: {
        InfoSection
    }
}
</script>
<style lang="">

</style>
