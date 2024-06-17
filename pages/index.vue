<script setup lang="ts">
const { gtag, $script } = useScriptGoogleAnalytics({
  id: useRuntimeConfig().public.scripts.googleAnalytics.id
})
gtag('event', 'page_view', {
  page_title: 'Home',
  page_location: 'https://example.com',
  page_path: '/',
})
</script>
<template>
    <div>
        Homepage
    </div>
    <NuxtLink to="/pdp">To PDP</NuxtLink>
</template>