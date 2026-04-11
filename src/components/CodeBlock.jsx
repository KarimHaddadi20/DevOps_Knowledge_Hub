import { useState } from 'react'

function CodeBlock({ children, language }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const text = typeof children === 'string' ? children : children?.toString() ?? ''
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="code-block-wrapper">
      <div className="code-block-header">
        {language && <span className="code-block-lang">{language}</span>}
        <button
          type="button"
          className={`code-copy-btn${copied ? ' code-copy-btn--copied' : ''}`}
          onClick={handleCopy}
          aria-label={copied ? 'Copié !' : 'Copier le code'}
          title={copied ? 'Copié !' : 'Copier'}
        >
          {copied ? (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copié
            </>
          ) : (
            <>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copier
            </>
          )}
        </button>
      </div>
      <pre className="code-block"><code>{children}</code></pre>
    </div>
  )
}

export default CodeBlock
