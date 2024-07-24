<template>
  <section id="inicio" class="relative w-full h-max sm:h-full z-10 overflow-x-hidden">
    <div class="h-full py-20 px-8 sm:px-0 sm:py-10 pt-28 sm:pt-14 bg-variant-bg/95 sm:flex sm:items-center">
      <article class="sm:w-1/2 sm:mx-20">
        <h1
          class="w-4/7 sm:w-full mb-4 text-5xl sm:text-6xl text-variant-r font-bellefair font-thin animate-slideToBottom">
          Olá, sou Hernani Kaiser.
        </h1>
        <p class="mb-3 animate-slideToRight">Estou aqui para te ajudar, através da terapia on-line, a enfrentar um
          momento
          de tristeza, angústia, ansiedade, perda ou alguma outra dificuldade pelo qual você esteja passando e não sabe
          como sair dela sozinha.
        </p>
        <p class="mb-3 animate-slideToRight">Você vai perceber que a terapia on-line vai muito além de um desabafo com
          um
          amigo e o
          quanto ela pode mudar a maneira como você enxerga a vida. Num momento só seu, com muito acolhimento e sem
          qualquer tipo de julgamento você vai perceber que é mais fácil passar por esse momento com a
          ajudada de alguém.
        </p>
        <a :href="whatsappLink" target="_blank" class="
            uppercase
            flex
            items-center
            w-fit
            mx-auto
            sm:mx-0
            my-10
            px-8
            py-4
            hover:bg-whatsapp/80
            bg-whatsapp
            text-xs
            text-primary
            font-montserrat
            font-semibold
            animate-slideToTop">
          <mdi-icon type="mdi" :path="mdiWhatsapp" class="mr-2"></mdi-icon>
          Agende sua sessão
        </a>
      </article>
      <article class="sm:w-2/6 sm:my-10 animate-slideToLeft">
        <img src="@/assets/profile_1.webp" alt="profile" class="shadow rounded" />
      </article>
    </div>
  </section>
</template>

<script setup>
import { whatsappLink } from '@/utils/constants';
import { mdiWhatsapp } from '@mdi/js';
</script>

<style scoped>
section {
  background-image: url('@/assets/heroBannerBackground.webp');
  background-size: cover;
  background-position-y: center;
  background-attachment: fixed;
}
</style>