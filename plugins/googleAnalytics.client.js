import { useRuntimeConfig } from '#imports';

export default defineNuxtPlugin(() => {
  const { public: { scripts:{googleAnalytics:{id:GA_ID}} } } = useRuntimeConfig();

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());

  gtag('config', GA_ID); // Use the environment variable
});