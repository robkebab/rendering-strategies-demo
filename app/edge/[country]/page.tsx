import api from '../../../api'
import ParityProduct from '../../../components/parity-product'

export async function generateStaticParams() {
  const countries = await api.product.countries()
  return countries.map((country) => ({ country }))
}

export default async function EdgeProductPage({
  params,
}: {
  params: Promise<{ country: string }>
}) {
  const { country } = await params
  const product = await api.product.fetch({ country })

  return <ParityProduct country={country} product={product} strategy="edge" />
}
