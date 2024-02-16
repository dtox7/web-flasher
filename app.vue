<template>
  <div>
    <!-- Warning for browsers that do not support WebSerial API -->
    <div v-if="!isWebSerialSupported" class="unsupported-browser-warning">
      <p>Your browser does not support the WebSerial API. Please switch to a compatible browser, such as Chrome or Edge, for full functionality.</p>
    </div>
    <Head>
      <Title>Bitdastra Web Flasher</Title>
      <Meta name="description" :content="title" />
    </Head>
    <section class="text-gray-400 bg-2C2D3C body-font">
      <div class="container px-5 py-1 mx-auto">
        <div class="flex flex-col content-center justify-center">
          <div class="flex flex-wrap sm:flex-row flex-col py-2 mb-2">
            <div class="mx-auto">
              <img src="@/assets/img/logo.svg" class="h-32 w-32" alt="Bitdastra Logo" />
              <h1 class="text-white mb-4 text-4xl font-extrabold">
                Bitdastra Web Flasher
              </h1>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-72 overflow-hidden flex flex-col items-center display-inline">
              <img src="@/assets/img/hydra-pcb.svg" class="h-60 mb-2 invert mx-auto" alt="Device" />
              <Device />
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">Device</h2>
            <p class="text-base leading-relaxed mt-2">
              Plug in your device via USB. Please ensure the cable is not a power-only one. 
            </p>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-72 flex flex-col items-center">
              <img src="@/assets/img/github-mark-white.svg" class="h-60 w-60 p-5 mb-2 mx-auto" alt="Github Logo" />
              <Firmware />
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">Firmware</h2>
            <p class="text-base leading-relaxed mt-2">
              Upload your firmware from your device.</p>
          </div>
          <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div class="rounded-lg h-72 overflow-hidden flex flex-col items-center">
              <BoltIcon class="h-60 w-60 p-5 mb-2 mx-auto text-white" />
              <Flash />
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">Flash</h2>
            <p class="text-base leading-relaxed mt-2">
              Flash your device. Choose whether you wish to update your device or wipe the flash and install from scratch.
            </p>
          </div>
        </div>
      </div>
    </section>
      <footer class="footer bg-2C2D3C text-white mt-4 py-4">
      <div class="container mx-auto px-5 py-4 text-center">
        <p>
          Powered by
          <a href="https://bitdastra.com/">Bitdastra</a>
           | <a href="https://bitdastra.com/general-terms-and-conditions">Terms & Conditions</a> | <a href="https://bitdastra.com/data-privacy">Data Privacy</a> | <a href="https://bitdastra.com/imprint">Legal Information</a>
        </p>
        <p>
        Bitdastra is a Social Network of Communication
        </p>
      </div>
            <button class="skip-button" @click="skipToOtherSite">Skip to Main</button>
    </footer>
  </div>
</template>

<script setup>
import 'flowbite';

import { onMounted } from 'vue';

import {
  initDropdowns,
  initModals,
  initTooltips,
} from 'flowbite';

import { BoltIcon } from '@heroicons/vue/24/solid';

// WebSerial API support check
const isWebSerialSupported = computed(() => {
  return 'serial' in navigator;
});

onMounted(() => {
  initDropdowns();
  initModals();
  initTooltips();
});

// Method to handle skipping to another site
const skipToOtherSite = () => {
  window.location.href = 'https://main.bitdastra.com/';
}
</script>

<style>
  body {
    background-color: #121417;
  }/*
  .invert { 
    -webkit-filter: invert(1);
    filter: invert(1);
  }*/
  .bg-meshtastic {
    background-color: #48b1b5;
  }
 .footer {
    background-color: #121417;
  }
  .footer a {
    color: #48b1b5;
  }
  .footer a:hover {
    text-decoration: underline;
  }
  .unsupported-browser-warning {
    background-color: #ffcc00;
    color: black;
    padding: 10px;
    text-align: center;
  }
  button#dropdownFirmwareButton {
    display: none;
}
img.h-32.w-32 {
    display: inline-block;
}
h1.text-white.mb-4.text-4xl.font-extrabold {
    display: inline-block;
}
button.skip-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #2c2d3c;
    color: white;
    border: solid 2px #f5f5f5;
    border-radius: 5px;
    cursor: pointer;
    z-index: 999;
}
button.skip-button:hover {
    background-color: #48b1b5;
    border: 2px solid #212121;
}
</style>
