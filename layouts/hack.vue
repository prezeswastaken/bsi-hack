<script lang="ts" setup></script>

<template>
    <ClientOnly>
        <div
            class="w-full bg-opacity-50 bg-cover min-h-screen bg-[url('https://www.icegif.com/wp-content/uploads/2022/01/icegif-183.gif')]"
        >
            <div
                class="flex flex-col gap-5 items-center p-10 w-full min-h-screen text-red-500 bg-black bg-opacity-50"
            >
                <slot />
            </div>
        </div>
    </ClientOnly>
</template>

<style scoped></style>
