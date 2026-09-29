import { geolocation } from '@vercel/functions'
import { type NextRequest, NextResponse } from 'next/server'

// Rewrite the public /edge route based on request geolocation.
export const config = {
  matcher: '/edge',
}

export function proxy(req: NextRequest) {
  // Get country
  const country = geolocation(req).country?.toLowerCase() || 'us'

  // Update pathname
  req.nextUrl.pathname = `/edge/${country}`

  // Rewrite to URL
  return NextResponse.rewrite(req.nextUrl)
}
