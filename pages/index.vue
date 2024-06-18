<script setup lang="ts">
usePageView()
</script>
<template>
  {{ useRuntimeConfig().public.scripts.googleAnalytics.id }}
  <div>Homepage</div>
  <NuxtLink to="/pdp">To PDP</NuxtLink>
</template>
