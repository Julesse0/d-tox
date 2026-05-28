(() => {
  const mobileMenu = document.querySelector('[data-mobile-menu]')
  const nav = document.querySelector('nav')
  const toggle = nav?.querySelector('button[aria-label]')

  if (!mobileMenu || !nav || !toggle) {
    return
  }

  const openMenu = () => {
    mobileMenu.hidden = false
    mobileMenu.setAttribute('data-open', 'true')
    toggle.setAttribute('aria-expanded', 'true')
    toggle.setAttribute('aria-label', 'Fermer le menu')
    toggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>'
  }

  const closeMenu = () => {
    mobileMenu.hidden = true
    mobileMenu.removeAttribute('data-open')
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Ouvrir le menu')
    toggle.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>'
  }

  toggle.addEventListener('click', () => {
    if (mobileMenu.hidden) {
      openMenu()
    } else {
      closeMenu()
    }
  })

  mobileMenu.addEventListener('click', (event) => {
    const target = event.target
    if (target instanceof HTMLAnchorElement) {
      closeMenu()
    }
  })

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      closeMenu()
    }
  })
})()
