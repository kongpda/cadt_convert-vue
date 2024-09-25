<template>
    <HeaderSection />
    <!-- header section strats -->
    <router-view />
    <FooterSection />
</template>

<script>
import { useRouter } from 'vue-router'
import HeaderSection from '@/components/Section/HeaderSection.vue'
import FooterSection from '@/components/Section/FooterSection.vue'
export default {
    name: 'App',
    components: {
        HeaderSection,
        FooterSection,
    },
    setup() {
        const router = useRouter()
        return { router }
    },
}
</script>

<style>
/* Your styles here */
</style>
