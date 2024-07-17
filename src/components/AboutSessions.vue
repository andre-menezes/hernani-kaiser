<template>
  <section id="sessoes"
    class="relative w-full min-h-full bg-primary py-20 px-8 sm:px-20 border-y-4 border-variant-g/40">
    <h2
      class="w-2/3 sm:w-full mb-4 text-4xl sm:text-5xl text-variant-r font-bellefair font-thin animate-slideFromRight">
      Sobre as sessões
    </h2>
    <article class="h-full pt-20 sm:py-10">
      <div class="md:grid md:grid-cols-2 md:place-items-center">
        <img class="w-full sm:w-5/6 mx-auto mb-20 sm:mb-0 drop-shadow-lg" src="@/assets/sessions.webp"
          alt="Homem de meia idade sentado em frente ao notebook realizando uma sessão de terapia online" />
        <p class="mb-14">Durante nossas sessões, você encontrará um espaço seguro e acolhedor para expressar seus
          sentimentos, pensamentos
          e preocupações. A abordagem psicanalítica permite uma exploração profunda das questões que você enfrenta,
          ajudando
          a revelar padrões inconscientes e promovendo o autoconhecimento e a realização pessoal.</p>
      </div>
      <h3 class="mb-10 text-xl text-variant-r font-semibold">Como funciona as sessões?</h3>
      <div class="flex flex-col-reverse md:grid md:grid-cols-2 md:place-items-center">
        <div>
          <ol class="w-full my-10">
            <li class="mb-6">
              <mdi-icon type="mdi" :path="mdiNumeric1"
                class="inline text-primary rounded-full w-5 h-5 bg-variant-r mb-1 mr-2">
              </mdi-icon>
              <strong>Formato Online: </strong> As sessões são realizadas por videoconferência, permitindo que você
              participe
              do conforto do seu lar ou de qualquer outro local que prefira, desde que haja uma conexão estável à
              internet.
            </li>
            <li class="mb-6">
              <mdi-icon type="mdi" :path="mdiNumeric2"
                class="inline text-primary rounded-full w-5 h-5 bg-variant-r mb-1 mr-2">
              </mdi-icon>
              <strong>Duração:</strong> Cada sessão tem uma duração de 50 minutos. Esse tempo é ideal para explorar
              questões
              em profundidade e avançar no processo terapêutico sem ser cansativo.
            </li>
            <li class="mb-6">
              <mdi-icon type="mdi" :path="mdiNumeric3"
                class="inline text-primary rounded-full w-5 h-5 bg-variant-r mb-1 mr-2">
              </mdi-icon>
              <strong>Frequência:</strong> As sessões são realizadas semanalmente, garantindo um ritmo constante e
              progressivo
              no tratamento.
            </li>
          </ol>
          <a :href="whatsappLink" target="_blank" class="
            uppercase
            block
            w-fit
            mx-auto
            sm:mx-0
            my-14
            px-8
            py-4
            hover:bg-variant-g/80
            bg-variant-g
            text-xs
            text-primary
            font-montserrat
            font-semibold">
            Marque sua sessão
          </a>
        </div>
        <img class="w-full sm:w-5/6 mx-auto drop-shadow-lg my-10 sm:my-0" src="@/assets/sessions2.webp"
          alt="Homem idoso sentado utilizando um tablet ascenando para a pessoa do outro lado da chamada de vídeo" />
      </div>
    </article>
  </section>
</template>

<script setup>
import {
  mdiNumeric1,
  mdiNumeric2,
  mdiNumeric3
} from '@mdi/js';
import { whatsappLink } from '@/utils/constants';
</script>