import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import IndexJpPage from './pages/index/jp.jsx'
import IndexEnPage from './pages/index/en.jsx'

const normalizePath = (pathname) => {
  if (!pathname) return '/'
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed || '/'
}

const stripBasePath = (pathname) => pathname.replace(/^\/mybrighture-landing(?=\/|$)/, '') || '/'

const resolveRoutePath = () => {
  const hashPath = window.location.hash.replace(/^#/, '')
  if (hashPath) return normalizePath(hashPath)
  return normalizePath(stripBasePath(window.location.pathname))
}

const englishPaths = new Set(['/en'])
const japanesePaths = new Set(['/jp'])
const currentPath = resolveRoutePath()
const ActivePage = englishPaths.has(currentPath)
  ? IndexEnPage
  : japanesePaths.has(currentPath)
    ? IndexJpPage
    : null

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {ActivePage ? (
      <ActivePage />
    ) : (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-[#1f2128]">
        <div>
          <h1 className="text-3xl font-bold">404</h1>
          <p className="mt-2 text-base">Page not found.</p>
        </div>
      </main>
    )}
  </StrictMode>,
)
