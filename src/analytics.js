/**
 * Optional analytics. Values come from Vite env at **build** time (set in GitHub Actions secrets for CI).
 *
 * Plausible: we inject the official deferred script (same as the “Script” tab). Automated verification
 * looks for this pattern; it also avoids shipping the NPM bundle without a configured domain.
 */

export function initAnalytics() {
  const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN?.trim()
  const plausibleScriptUrl =
    import.meta.env.VITE_PLAUSIBLE_SCRIPT_URL?.trim() ||
    'https://plausible.io/js/script.js'
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

  if (plausibleDomain) {
    const s = document.createElement('script')
    s.defer = true
    s.dataset.domain = plausibleDomain
    s.src = plausibleScriptUrl
    document.head.appendChild(s)
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
