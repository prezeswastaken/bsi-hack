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
    const response = await useFetch("/api/login", {
        method: "POST",
        body: form.value,
    });

    const loginResponse = response.data.value as LoginResponse;
    const { status, name } = loginResponse;
    if (status != 200) {
        errorMessage.value = "These credentials do not match our records.";
    } else {
        console.log(name);
        if (name) {
            nameState.value = name;
        }
        navigateTo("/dashboard");
    }
}
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
            @click.prevent="handleLogin"
        >
            Login
        </button>
        <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
    </form>
</template>

<style scoped></style>
