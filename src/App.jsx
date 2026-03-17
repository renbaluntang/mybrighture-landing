import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LANDING_BY_PATH } from './pages/registry.js'

const normalizePath = (pathname) => {
  if (!pathname) return '/'
  const trimmed = pathname.replace(/\/+$/, '')
  return trimmed || '/'
}

const stripBasePath = (pathname, basePath) => {
  if (basePath === '/') return pathname
  if (pathname === basePath) return '/'
  return pathname.startsWith(`${basePath}/`) ? pathname.slice(basePath.length) || '/' : pathname
}

const basePath = normalizePath(import.meta.env.BASE_URL || '/')
const currentPath = normalizePath(stripBasePath(normalizePath(window.location.pathname), basePath))
const ActivePage = LANDING_BY_PATH.get(currentPath) || null

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
