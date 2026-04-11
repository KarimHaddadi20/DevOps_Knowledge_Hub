import { useEffect } from 'react'

/**
 * Injecte automatiquement un bouton "Copier" sur tous les .code-block
 * qui ne sont pas déjà dans un .code-block-wrapper.
 */
export function useCopyButtons(activeSection) {
  useEffect(() => {
    const blocks = document.querySelectorAll('.code-block:not(.code-block-wrapper .code-block)')

    const cleanups = []

    blocks.forEach((block) => {
      if (block.dataset.copyInjected) return
      block.dataset.copyInjected = '1'

      const btn = document.createElement('button')
      btn.type = 'button'
      btn.className = 'code-copy-btn code-copy-btn--injected'
      btn.setAttribute('aria-label', 'Copier le code')
      btn.title = 'Copier'
      btn.innerHTML = `
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        Copier
      `

      const handleClick = async () => {
        const text = block.innerText || block.textContent || ''
        try {
          await navigator.clipboard.writeText(text)
        } catch {
          const ta = document.createElement('textarea')
          ta.value = text
          document.body.appendChild(ta)
          ta.select()
          document.execCommand('copy')
          document.body.removeChild(ta)
        }
        btn.classList.add('code-copy-btn--copied')
        btn.innerHTML = `
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          Copié
        `
        setTimeout(() => {
          btn.classList.remove('code-copy-btn--copied')
          btn.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
            Copier
          `
        }, 2000)
      }

      btn.addEventListener('click', handleClick)
      block.style.position = 'relative'
      block.appendChild(btn)

      cleanups.push(() => {
        btn.removeEventListener('click', handleClick)
        if (btn.parentNode === block) block.removeChild(btn)
        delete block.dataset.copyInjected
      })
    })

    return () => cleanups.forEach(fn => fn())
  }, [activeSection])
}
