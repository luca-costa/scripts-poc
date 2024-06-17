export const usePageView = () => { 
    const { gtag, $script } = useScriptGoogleAnalytics({
        id: useRuntimeConfig().public.scripts.googleAnalytics.id
    })
    gtag('event', 'page_view', {
        page_title: 'Home',
        page_location: 'https://example.com',
        page_path: '/',
    })
}