import type { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@vercel/examples-ui'
import { Vercel } from '@vercel/examples-ui/icons'

const path = 'edge-middleware/power-parity-pricing-strategies'
const repositoryUrl = `https://github.com/vercel/examples/tree/main/${path}`
const deployUrl = `https://vercel.com/new/clone?repository-url=${encodeURIComponent(repositoryUrl)}&project-name=${encodeURIComponent(path)}&repository-name=${encodeURIComponent(path)}`

// Keep the example UI without its Pages Router-era Layout/Link components.
export default function ExampleShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto h-screen flex flex-col">
      <nav className="border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
        <div className="flex items-center lg:px-6 px-8 mx-auto max-w-7xl">
          <div className="flex flex-row items-center">
            <Link href="/" aria-label="Vercel Logo" className="text-link hover:text-link-light transition-colors no-underline">
              <svg height="26" viewBox="0 0 75 65" fill="#000" aria-hidden="true">
                <path d="M37.59.25l36.95 64H.64l36.95-64z" />
              </svg>
            </Link>
            <ul className="flex items-center content-center">
              <li className="ml-2 text-gray-200">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" fill="none" aria-hidden="true">
                  <path d="M16.88 3.549L7.12 20.451" />
                </svg>
              </li>
              <li className="font-medium" style={{ letterSpacing: '.01px' }}>
                <a href={repositoryUrl} className="text-accents-6 no-underline transition-colors duration-200 hover:text-accents-8 cursor-pointer" target="_blank" rel="noreferrer">
                  Vercel Examples / edge-middleware / power-parity-pricing-strategies
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1 justify-end hidden md:flex">
            <nav className="flex-row inline-flex items-center">
              <span className="ml-2 h-full flex items-center text-accents-5">
                <Button variant="ghost" Component="a" href="https://github.com/vercel/examples/tree/main" target="_blank" rel="noreferrer">More Examples →</Button>
              </span>
              <span className="ml-2 h-full flex items-center text-accents-5">
                <Button Component="a" href={deployUrl} target="_blank" rel="noreferrer">Clone &amp; Deploy</Button>
              </span>
            </nav>
          </div>
        </div>
      </nav>
      <div className="px-8 bg-accents-0">{children}</div>
      <footer className="py-10 w-full mt-auto border-t flex items-center justify-center bg-accents-1 z-20">
        <span className="text-primary">Created by</span>
        <a href="https://vercel.com" aria-label="Vercel.com Link" target="_blank" rel="noreferrer" className="text-black">
          <Vercel className="inline-block h-6 ml-3 text-primary" aria-hidden="true" />
        </a>
      </footer>
    </div>
  )
}
