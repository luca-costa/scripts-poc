
import { useRuntimeConfig } from '#imports';
import { useRouter } from '@nuxtjs/composition-api';

export default defineNuxtPlugin(() => {
  const { public: { gaId } } = useRuntimeConfig();
  const router = useRouter();

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());

  gtag('config', gaId);

  router.afterEach(() => {
    gtag('event', 'page_view');
  });
});