<template>
  <nav class="w-full h-fit py-4 px-8 sm:px-20 text-xs sm:text-lg fixed bg-primary shadow z-50">
    <ul class="flex gap-4 sm:gap-8">
      <li class="cursor-pointer"><a class="uppercase font-semibold" @click="scrollToSection('top', '/')">Início</a></li>
      <li class="cursor-pointer"><a class="uppercase font-semibold"
          @click="scrollToSection('sobre-mim', '/sobre-mim')">Sobre mim</a>
      </li>
      <li class="cursor-pointer"><a class="uppercase font-semibold"
          @click="scrollToSection('sessoes', '/sessoes')">Sessões</a></li>
      <li class="cursor-pointer"><a class="uppercase font-semibold"
          @click="scrollToSection('terapia-online', '/terapia-online')">Terapia
          On-line</a></li>
      <li class="cursor-pointer"><a class="uppercase font-semibold"
          @click="scrollToSection('contato', '/contato')">Contato</a></li>
    </ul>
  </nav>
</template>

<script setup>
function scrollToSection(sectionId, url) {
  event.preventDefault();

  if (sectionId === 'top') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  history.pushState(
    "",
    document.title,
    url
  );
}
</script>