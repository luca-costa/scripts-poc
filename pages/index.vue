<script setup lang="ts">
const { gtag, $script } = useScriptGoogleAnalytics({
  id: useRuntimeConfig().public.scripts.googleAnalytics.id
})
onMounted(() => {
    gtag('event', 'page_view', {
        page_title: 'Home',
        page_location: 'https://example.com',
        page_path: '/',
    })
})
</script>
<template>
    {{ useRuntimeConfig().public.scripts.googleAnalytics.id }}
    <div>
        Homepage
    </div>
    <NuxtLink to="/pdp">To PDP</NuxtLink>
</template>