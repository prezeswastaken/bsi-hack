<script lang="ts" setup>
import type { Log } from "~/types/Log";

defineEmits(["close"]);

defineProps({
    logs: Array<Log>,
});
</script>

<template>
    <div
        class="flex absolute top-0 flex-col justify-start items-center p-5 w-full min-h-screen bg-black bg-opacity-90"
    >
        <h1 class="text-5xl">RESULTS OF BRUTE FORCE ATTACK</h1>
        <button
            class="py-2 px-5 m-5 border-4 border-red-500 duration-300 hover:text-green-500 hover:border-green-500"
            @click="$emit('close')"
        >
            GO BACK
        </button>
        <p v-for="log in logs" :class="log.success ? 'text-green-500' : ''">
            {{ log.password }}
        </p>
    </div>
</template>

<style scoped></style>
