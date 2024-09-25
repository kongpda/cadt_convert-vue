<template lang="">
    <div>
        <div class="hero_area">
            <div class="hero_bg_box">
                <div class="bg_img_box">
                    <img src="@/assets/images/hero-bg.png" alt="" />
                </div>
            </div>
            <HeroSection />
        </div>
        <ServiceSection />
        <AboutSection />
        <WhySection />
        <TeamSection />
        <ClientSection />
        <InfoSection />
    </div>
</template>
<script>
import HeroSection from '@/components/Section/HeroSection.vue'
import ServiceSection from '@/components/Section/ServiceSection.vue'
import AboutSection from '@/components/Section/AboutSection.vue'
import WhySection from '@/components/Section/WhySection.vue'
import TeamSection from '@/components/Section/TeamSection.vue'
import ClientSection from '@/components/Section/ClientSection.vue'
import InfoSection from '@/components/Section/InfoSection.vue'

export default {
    name: 'HomePage',
    components: {
        HeroSection,
        ServiceSection,
        AboutSection,
        WhySection,
        TeamSection,
        ClientSection,
        InfoSection,
    },
}
</script>
<style lang=""></style>
