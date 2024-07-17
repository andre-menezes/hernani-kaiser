<template>
  <main class="max-w-screen min-h-screen bg-primary text-variant-g-txt sm:text-lg">
    <NavBar />
    <HeroBanner />
    <IntroduceSection />
    <AboutMe />
    <AboutSessions />
    <TerapySection />
    <ContactSection />
    <a class="fixed bottom-8 right-8 rounded-full shadow z-20 w-14 h-14 bg-whatsapp hover:bg-whatsapp/90 flex justify-center items-center"
      :href="whatsappLink" target="_blank">
      <mdi-icon type="mdi" :path="mdiWhatsapp" class="w-10 h-10  text-white">
      </mdi-icon>
    </a>
  </main>
</template>

<script setup>
import AboutMe from './components/AboutMe.vue';
import AboutSessions from './components/AboutSessions.vue';
import ContactSection from './components/ContactSection.vue';
import HeroBanner from './components/HeroBanner.vue';
import NavBar from './components/NavBar.vue';
import IntroduceSection from './components/IntroduceSection.vue';
import TerapySection from './components/TerapySection.vue';
import { mdiWhatsapp } from '@mdi/js';
import { whatsappLink } from './utils/constants';
</script>
