import { useRuntimeConfig } from '#imports';

export default defineNuxtPlugin(() => {
  const { public: { gaId } } = useRuntimeConfig();

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());

  gtag('config', gaId); // Use the environment variable
});