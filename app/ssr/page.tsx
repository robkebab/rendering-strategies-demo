import { headers } from 'next/headers'

import api from '../../api'
import type { Country } from '../../types'
import ParityProduct from '../../components/parity-product'

export default async function SSRProductPage() {
  // Reading request headers keeps this page request-specific.
  const country = ((await headers()).get('x-vercel-ip-country') || 'us').toLowerCase() as Country
  const product = await api.product.fetch({ country })

  return <ParityProduct country={country} product={product} strategy="ssr" />
}
