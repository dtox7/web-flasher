<template>
    <div>
        <button data-tooltip-target="tooltip-auto" class="mx-2 display-inline content-center px-3 py-2 text-xs font-medium text-center  hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg inline-flex items-center text-white hover:text-black"
            type="button"
            @click="store.autoSelectHardware">
            <SparklesIcon class="h-4 w-4 " />
        </button>
        <div id="tooltip-auto" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300  rounded-lg shadow-sm opacity-0 tooltip bg-gray-700">
            Select device
            <div class="tooltip-arrow" data-popper-arrow></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { DeviceHardware } from '~/types/api';

import { SparklesIcon } from '@heroicons/vue/24/solid';

import { useDeviceStore } from '../stores/deviceStore';

const store = useDeviceStore();
store.fetchList();

const selectedTarget = computed(() => store.$state.selectedTarget?.hwModel ? store.$state.selectedTarget?.displayName : "Select Target Device")

const setTarget = (target: DeviceHardware) => {
    store.setSelectedTarget(target);
    document.getElementById('dropdownDevices')?.classList.toggle('hidden');
}

</script>