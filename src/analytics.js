/**
 * Optional visitor analytics (set env vars at build time).
 *
 * Plausible: official NPM package is loaded only when VITE_PLAUSIBLE_DOMAIN is set
 * (matches Plausible "NPM installation" + verification).
 */

export async function initAnalytics() {
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN?.trim()
  const plausibleEndpoint = import.meta.env.VITE_PLAUSIBLE_ENDPOINT?.trim()
  const plausibleLocalhost =
    import.meta.env.VITE_PLAUSIBLE_CAPTURE_LOCALHOST === 'true'
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

  if (plausibleDomain) {
    const { init: plausibleInit } = await import('@plausible-analytics/tracker')
    plausibleInit({
      domain: plausibleDomain,
      ...(plausibleEndpoint ? { endpoint: plausibleEndpoint } : {}),
      captureOnLocalhost: plausibleLocalhost,
    })
    return
  }

  if (gaId) {
    const s = document.createElement('script')
    s.async = true
    s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`
    s.onload = () => {
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      window.gtag = gtag
      gtag('js', new Date())
      gtag('config', gaId)
    }
    document.head.appendChild(s)
  }
}
