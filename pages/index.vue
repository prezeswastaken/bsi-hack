<script lang="ts" setup>
import type { LoginRequest } from "~/types/LoginRequest";

const form = ref<LoginRequest>({
    name: "",
    password: "",
});
</script>

<template>
    <div class="text-7xl text-accent">Login</div>
    <form class="flex flex-col gap-2 mt-10">
        <p>Name</p>
        <input
            type="text"
            class="py-3 px-5 border-4 bg-bg border-dark"
            v-model="form.name"
        />
        <p>Password</p>
        <input
            type="password"
            class="py-3 px-5 border-4 bg-bg border-dark"
            v-model="form.password"
        />
        <button
            class="py-3 px-5 bg-accent text-bg"
            @click.prevent="console.log(form)"
        >
            Login
        </button>
    </form>
</template>

<style scoped></style>
