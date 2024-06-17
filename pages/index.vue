<script setup lang="ts">
const { gtag, $script } = useScriptGoogleAnalytics({
  id: useRuntimeConfig().public.scripts.googleAnalytics.id
})
</script>
<template>
    <div>
        Homepage
    </div>
    <NuxtLink to="/pdp">To PDP</NuxtLink>
</template>