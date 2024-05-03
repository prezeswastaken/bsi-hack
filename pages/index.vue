<script lang="ts" setup>
import type { LoginRequest } from "~/types/LoginRequest";
import type { LoginResponse } from "~/types/LoginResponse";

const form = ref<LoginRequest>({
    name: "",
    password: "",
});

const nameState = useState("name", () => "");

const errorMessage = ref<string | null>(null);

async function handleLogin() {
    try {
        const response = await $fetch("/api/login", {
            method: "POST",
            body: form.value,
        });

        const loginResponse = response;
        const { name } = loginResponse;
        console.log(name);
        nameState.value = name;
        navigateTo("/dashboard");
    } catch (error) {
        errorMessage.value = "These credentials do not match our records.";
    }
}
</script>

<template>
    <div class="text-7xl text-accent">Login</div>
    <form
        @submit.prevent="handleLogin"
        class="flex flex-col gap-2 mt-10 min-w-96"
    >
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
        <button class="py-3 px-5 bg-accent text-bg">Login</button>
        <p class="text-red-500">{{ errorMessage }}</p>
    </form>
</template>

<style scoped></style>
