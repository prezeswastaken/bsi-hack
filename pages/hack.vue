<script lang="ts" setup>
import { PasswordType } from "~/enums/PasswordType";
import type { Log } from "~/types/Log";
import type { LoginRequest } from "~/types/LoginRequest";

definePageMeta({
    // @ts-ignore
    layout: "hack",
});

const logs = ref<Array<Log>>([]);

const passwordType = ref(PasswordType.Basic);
const basicPasswords = [
    "admin",
    "password",
    "bsi",
    "widelec",
    "mąka",
    "rudatańczyjakszalona",
];
const passwords = ref(basicPasswords);
const showLogs = ref(false);

async function attack() {
    logs.value = [];
    showLogs.value = true;
    for (const password of passwords.value) {
        console.log("Trying password: ", password);
        try {
            await $fetch("/api/login", {
                method: "POST",
                body: JSON.stringify({
                    name: "admin",
                    password,
                } as LoginRequest),
            });
            logs.value.push({
                password,
                success: true,
            });
        } catch (error) {
            logs.value.push({
                password,
                success: false,
            });
        }
    }
    console.log(logs.value);
}

function handleBasicClick() {
    passwordType.value = PasswordType.Basic;
}

function handleNumbersClick() {
    passwordType.value = PasswordType.Numbers;
}

function handleNumbersAndSymbolsClick() {
    passwordType.value = PasswordType.NumbersAndSymbols;
}

watchEffect(() => {
    switch (passwordType.value) {
        case PasswordType.Basic:
            passwords.value = basicPasswords;
            break;
        case PasswordType.Numbers:
            const addedPasswords = basicPasswords.map(
                (password) => password + "123",
            );

            const newPasswords = [...basicPasswords, ...addedPasswords];
            passwords.value = newPasswords;

            break;
        case PasswordType.NumbersAndSymbols:
            const symbolPasswords = basicPasswords.map(
                (password) => password + "123!@#",
            );
            const numberPasswords = basicPasswords.map(
                (password) => password + "123",
            );
            const allPasswords = [
                ...basicPasswords,
                ...symbolPasswords,
                ...numberPasswords,
            ];
            passwords.value = allPasswords;
            break;
    }
});
</script>

<template>
    <button
        @click="attack"
        class="mb-5 text-5xl duration-300 hover:text-green-600"
    >
        BRUTE FORCE ATTACK
    </button>
    <button @click="handleBasicClick">Basic</button>
    <button @click="handleNumbersClick">Numbers</button>
    <button @click="handleNumbersAndSymbolsClick">Numbers and Symbols</button>
    <div v-auto-animate class="flex flex-col gap-5">
        <Password
            v-for="password in passwords"
            :password="password"
            v-if="!showLogs"
        />
    </div>
    <Logs v-if="showLogs" :logs="logs" @close="showLogs = false" />
</template>

<style scoped></style>
