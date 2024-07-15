<template>
  <main class="max-w-screen min-h-screen bg-primary text-variant-g-txt sm:text-lg">
    <NavBar />
    <HeroBanner />
    <IntroduceSection />
    <AboutMe />
    <AboutSessions />
    <TerapySection />
  </main>
</template>

<script setup>
import AboutMe from './components/AboutMe.vue';
import AboutSessions from './components/AboutSessions.vue';
import HeroBanner from './components/HeroBanner.vue';
import NavBar from './components/NavBar.vue';
import IntroduceSection from './components/IntroduceSection.vue';
import TerapySection from './components/TerapySection.vue';
</script>
