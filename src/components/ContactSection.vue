<template>
  <section id="contato"
    class="relative w-full min-h-full bg-primary py-20 px-8 sm:px-20 border-y-4 border-variant-g/40">
    <h2
      class="w-2/3 sm:w-full mb-4 text-4xl sm:text-5xl text-variant-r font-bellefair font-thin animate-slideFromRight">
      Entre em contato
    </h2>

    <form class="flex flex-col items-center md:w-1/2 mx-auto">
      <label for="name" class="flex flex-col pb-8 mt-10 w-full">
        Nome
        <input v-model="name" type="text" id="name"
          class="border-2 border-variant-g/25 w-full mt-2 px-4 py-2 outline-variant-g-txt/50" />
      </label>

      <label for="message" class="flex flex-col w-full">
        Mensagem
        <textarea v-model="msg" id="message"
          class="resize-none border-2 border-variant-g/25 w-full h-36 mt-2 px-4 py-2 outline-variant-g-txt/50"
          maxlength="300"></textarea>
        <legend class="text-variant-g text-sm">{{ msg.length }}/300</legend>
      </label>

      <a :href="whatsappLink" target="_blank" class="
            uppercase
            block
            w-fit
            mx-auto
            sm:mx-0
            my-10
            px-8
            py-4
            hover:bg-variant-g/80
            bg-variant-g
            text-xs
            text-primary
            font-montserrat
            font-semibold
            cursor-pointer">
        Enviar mensagem
      </a>
    </form>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const name = ref('');
const msg = ref('');

const whatsappLink = computed(() => `https://api.whatsapp.com/send?phone=5511919406356&text=Ol%C3%A1%2C%20meu%20nome%20é%20${name.value}%20e%20vim%20pelo%20site.%20${msg.value}`);
</script>
