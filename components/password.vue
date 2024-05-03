<script lang="ts" setup>
import { PasswordType } from "~/enums/PasswordType";

const props = defineProps<{
    password: string;
}>();
</script>

<template>
    <div class="flex-col py-2 px-5 bg-black border-4 border-red-500 min-w-96">
        {{ password }}
    </div>
</template>

<style scoped></style>
