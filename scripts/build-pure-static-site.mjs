import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const sourceDir = path.join(rootDir, 'out')
const targetDir = path.join(rootDir, 'site-static')

const navItems = [
  {
    label: 'Nos Produits',
    href: '/produits/',
    children: [
      { label: 'DTÖX Original 1L', href: '/produits/d-tox/' },
      { label: 'Château de la Crau', href: '/produits/chateau/' },
    ],
  },
  {
    label: 'Blog',
    href: '/blog/',
    children: [
      { label: 'News', href: '/blog/articles/' },
      { label: 'Recettes', href: '/blog/recettes/' },
      { label: 'On parle de nous / Presse', href: '/blog/reseaux/' },
    ],
  },
  {
    label: 'À Propos',
    href: '/a-propos/',
    children: [
      { label: 'Notre Histoire', href: '/a-propos/#histoire' },
      { label: 'Chronologie', href: '/a-propos/#chronologie' },
      { label: 'Processus', href: '/a-propos/#processus' },
    ],
  },
  {
    label: 'Contact',
    href: '/contact/',
  },
]

function removeDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true })
}

function copyDir(source, target) {
  fs.mkdirSync(target, { recursive: true })

  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name)
    const targetPath = path.join(target, entry.name)

    if (entry.isDirectory()) {
      copyDir(sourcePath, targetPath)
      continue
    }

    fs.copyFileSync(sourcePath, targetPath)
  }
}

function walkFiles(dirPath, visitor) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const entryPath = path.join(dirPath, entry.name)

    if (entry.isDirectory()) {
      walkFiles(entryPath, visitor)
      continue
    }

    visitor(entryPath)
  }
}

function buildNavMarkup() {
  const mobileNav = navItems
    .map((item) => {
      const children = item.children
        ? `<div class="site-mobile-menu__children">${item.children
            .map((child) => `<a href="${child.href}">${child.label}</a>`)
            .join('')}</div>`
        : ''

      return `<div class="site-mobile-menu__group"><a class="site-mobile-menu__link" href="${item.href}">${item.label}</a>${children}</div>`
    })
    .join('')

  return `
<div class="site-mobile-menu" data-mobile-menu hidden>
  <div class="site-mobile-menu__panel">
    ${mobileNav}
  </div>
</div>`
}

function transformHtml(content, filePath) {
  const dir = path.dirname(filePath)
  let prefix = path.relative(dir, targetDir)
  if (!prefix) prefix = '.'
  prefix = prefix.replace(/\\/g, '/')

  let output = content.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
  output = output.replace(/<script\b[^>]*\/>/gi, '')
  output = output.replace(/<link\b[^>]*rel="preload"[^>]*as="script"[^>]*>/gi, '')
  output = output.replace(/<template\b[^>]*data-dgst="[^"]+"[^>]*><\/template>/gi, '')
  output = output.replace(/<!--\$!-->|<!--\$-->|<!--\/\$-->/g, '')

  if (!output.includes('site.css')) {
    output = output.replace('</head>', `  <link rel="stylesheet" href="${prefix}/site.css" />\n</head>`)
  }

  if (!output.includes('site.js')) {
    output = output.replace('</body>', `${buildNavMarkup()}\n  <script defer src="${prefix}/site.js"></script>\n</body>`)
  }

  // Rewrite root-absolute href/src to relative paths based on file location (catch spaces)
  output = output.replace(/(href|src)=(['"])\/(?!\/)([^'\"]+)\2/gi, (m, attr, q, url) => {
    return `${attr}=${q}${prefix}/${url}${q}`
  })

  // Remove Next.js chunk CSS/JS links (we'll keep media assets)
  output = output.replace(/<link[^>]+_next\/static\/chunks[^>]*>/gi, '')
  output = output.replace(/<script[^>]+_next\/static\/chunks[^>]*><\/script>/gi, '')

  // Encode spaces and other characters in media URLs so file:// can load them
  output = output.replace(/(href|src)=(['"])([^'"\s>]*?_next\/static\/media\/[^'">]+)\2/gi, (m, attr, q, url) => {
    try {
      const encoded = encodeURI(url)
      return `${attr}=${q}${encoded}${q}`
    } catch (e) {
      return m
    }
  })

  return output
}

function writeSupportFiles() {
  const css = `
.site-mobile-menu {
  display: none;
}

.site-mobile-menu[hidden] {
  display: none !important;
}

.site-mobile-menu {
  position: fixed;
  inset: 4rem 0 auto 0;
  z-index: 40;
  padding: 0 1rem 1rem;
}

.site-mobile-menu__panel {
  max-height: calc(100svh - 5rem);
  overflow: auto;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff9eb;
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.08);
  padding: 1rem;
}

.site-mobile-menu__group + .site-mobile-menu__group {
  margin-top: 1rem;
}

.site-mobile-menu__link,
.site-mobile-menu__children a {
  display: block;
  text-decoration: none;
}

.site-mobile-menu__link {
  padding: 0.75rem 0;
  font: 500 0.875rem/1.2 Montserrat, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #1a1a1a;
}

.site-mobile-menu__children {
  padding-left: 1rem;
  display: grid;
  gap: 0.25rem;
}

.site-mobile-menu__children a {
  padding: 0.5rem 0;
  font: 400 0.75rem/1.3 Montserrat, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(26, 26, 26, 0.7);
}

nav .relative:hover > .absolute,
nav .relative:focus-within > .absolute {
  visibility: visible !important;
  opacity: 1 !important;
  pointer-events: auto !important;
  transform: translateY(0) !important;
}

@media (min-width: 1024px) {
  .site-mobile-menu {
    display: none !important;
  }
}
`

  const js = `
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
`

  fs.writeFileSync(path.join(targetDir, 'site.css'), css.trimStart(), 'utf8')
  fs.writeFileSync(path.join(targetDir, 'site.js'), js.trimStart(), 'utf8')
}

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Source folder not found: ${sourceDir}`)
}

removeDir(targetDir)
copyDir(sourceDir, targetDir)

walkFiles(targetDir, (filePath) => {
  if (!filePath.endsWith('.html')) {
    return
  }

  const original = fs.readFileSync(filePath, 'utf8')
  const transformed = transformHtml(original, filePath)
  fs.writeFileSync(filePath, transformed, 'utf8')
})

writeSupportFiles()

function consolidateChunkCss() {
  const chunkDir = path.join(sourceDir, '_next', 'static', 'chunks')
  if (!fs.existsSync(chunkDir)) return

  let combined = ''

  for (const f of fs.readdirSync(chunkDir)) {
    if (!f.endsWith('.css')) continue
    const cssPath = path.join(chunkDir, f)
    let css = fs.readFileSync(cssPath, 'utf8')

    // Rewrite ../media/... to ./_next/static/media/... and encode spaces
    css = css.replace(/url\(([^)]+)\)/g, (m, inner) => {
      const raw = inner.trim().replace(/^['"]|['"]$/g, '')
      if (raw.startsWith('../media/')) {
        const tail = raw.slice('../media/'.length)
        const newPath = './_next/static/media/' + tail
        return `url("${encodeURI(newPath)}")`
      }
      return m
    })

    combined += css + '\n\n'
  }

  const siteCssPath = path.join(targetDir, 'site.css')
  let existing = ''
  if (fs.existsSync(siteCssPath)) existing = fs.readFileSync(siteCssPath, 'utf8')
  fs.writeFileSync(siteCssPath, combined + '\n' + existing, 'utf8')

  // Remove chunk css files from the copied site-static if present
  const copiedChunkDir = path.join(targetDir, '_next', 'static', 'chunks')
  if (fs.existsSync(copiedChunkDir)) {
    for (const f of fs.readdirSync(copiedChunkDir)) {
      if (f.endsWith('.css')) {
        try { fs.rmSync(path.join(copiedChunkDir, f)) } catch (e) {}
      }
    }
  }
}

consolidateChunkCss()

console.log(`Static site generated at ${targetDir}`)