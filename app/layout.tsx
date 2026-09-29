import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { Text } from '@vercel/examples-ui'

import ExampleShell from '../components/example-shell'
import map from '../public/map.svg'
import '@vercel/examples-ui/globals.css'

export const metadata: Metadata = {
  title: 'Power parity pricing strategies - Vercel Examples',
  description: 'Compare static, server-side, and edge-based regional pricing.',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ExampleShell>
          <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
            <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
              <Image alt="World Map" src={map} fill className="object-cover" />
            </div>
            <main className="flex flex-col items-center flex-1 px-4 sm:px-20 w-full text-center z-10 py-8 sm:py-20">
              <Text variant="h1" className="mb-4">Edge Middleware</Text>
              <Text>Dynamic content close to your users.</Text>
              <a
                className="flex items-center mt-2 text-md sm:text-lg text-blue-500 hover:underline"
                href="https://vercel.com/docs"
                target="_blank"
                rel="noreferrer"
              >
                View Documentation
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" className="ml-1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" shapeRendering="geometricPrecision">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </a>
              <div className="w-full max-w-xl mx-auto">{children}</div>
            </main>
          </div>
        </ExampleShell>
      </body>
    </html>
  )
}
