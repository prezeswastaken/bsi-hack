<script lang="ts" setup>
const nameState = useState("name", () => "");
</script>

<template>
    <div class="mt-10 text-7xl text-accent">
        You are logged in as {{ nameState }}!
    </div>
</template>

<style scoped></style>
