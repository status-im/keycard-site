// Pass campaign url params to Shopify on Get Keycard CTA https://github.com/status-im/keycard-site/issues/83

function storeUtmParams() {
  const utmParams = new URLSearchParams(window.location.search)
    .toString()
    .match(/utm_[^=&]+=[^&]+/g)

  if (utmParams) {
    sessionStorage.setItem('utmParams', JSON.stringify(utmParams))
  }
}

function forwardUtmParams() {
  const storedUtmParams = JSON.parse(sessionStorage.getItem('utmParams'))
  if (!storedUtmParams) return

  const keycardLinks = document.querySelectorAll(
    'a[href^="https://get.keycard.tech/"]',
  )
  keycardLinks.forEach((link) => {
    const url = new URL(link.href)
    storedUtmParams.forEach((param) => {
      const [key, value] = param.split('=')
      url.searchParams.set(key, value)
    })
    link.href = url.toString()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  storeUtmParams()
  forwardUtmParams()
})
