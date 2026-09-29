'use client'

import type { Country, Product } from '../types'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { getDiscountedPrice } from '../utils'
import { REGIONS, STORE_URL } from '../constants'

interface Props {
  product: Product
  country: Country
  strategy: 'edge' | 'ssr'
}

export default function ParityProduct({ country, product, strategy }: Props) {
  const [isParityEnabled, toggleParity] = useState<boolean>(true)
  const parityPrice = getDiscountedPrice(product.price, product.discount)

  return (
    <>
      <div className="ml-14 lg:ml-24 -mb-40 lg:-mb-56">
        <Image
          className="pointer-events-none w-full h-auto"
          alt={product.name}
          src={product.image}
          loading="eager"
          width={440}
          height={440}
        />
      </div>
      <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-16 w-full hover:shadow-2xl transition pt-16 lg:pt-24">
        <div className="p-4 flex flex-col justify-center items-center border-b">
          <div className="flex justify-between w-full items-baseline">
            <div className="ml-4 mr-auto text-left flex flex-col">
              <h4 className="font-semibold text-xl">{product.name}</h4>
              <h5 className="text-gray-700">{product.description}</h5>
            </div>
            {isParityEnabled ? (
              <div className="flex flex-col items-start font-bold text-lg leading-none">
                <span className="text-gray-500 text-sm line-through">
                  USD {product.price}
                </span>
                <span className="text-green-500">USD {parityPrice}</span>
              </div>
            ) : (
              <h4 className="font-bold text-lg">USD {product.price}</h4>
            )}
          </div>
        </div>
        <div className="p-4 gap-4 flex flex-col justify-center items-center border-b">
          <div className="bg-gray-50 text-gray-500 text-left py-2 px-4 rounded-md border-gray-200 border text-sm flex flex-col gap-4">
            <div className="inline-block">
              <span>
                Using {strategy === 'edge' ? 'Edge Middleware' : 'server-side rendering'},
                we dynamically rendered this discount for you, based on your location{' '}
              </span>
              <Image
                className="bg-gray-200 inline-flex"
                width={16}
                height={12}
                src={`/flags/${country.toLowerCase()}.svg`}
                alt={`The flag of ${country.toLowerCase()}`}
              />
              {strategy === 'edge' ? (
                <>
                  <span>. Learn more at </span>
                  <a className="text-blue-500" href="https://vercel.com/edge">
                    vercel.com/edge
                  </a>
                  {'.'}
                </>
              ) : (
                <span>.</span>
              )}
            </div>
            <label className="inline-flex items-center font-semibold">
              <input
                onChange={(event) => toggleParity(event.target.checked)}
                checked={isParityEnabled}
                className="text-black-500 w-4 h-4 mr-2 border border-gray-300 rounded"
                type="checkbox"
              />
              Activate {product.discount}% off with regional pricing
            </label>
          </div>
          <a
            href={
              isParityEnabled
                ? product.link
                : `${STORE_URL}/cart/${REGIONS['default'].id}:1`
            }
            target="_blank"
            rel="noreferrer"
            className="py-4 px-6 text-lg w-full bg-black text-center text-white hover:text-white rounded-md hover:bg-gray-900"
          >
            Buy now
          </a>
        </div>
      </section>
      <p className="text-gray-500 mt-3 text-sm text-center">
        This is an {strategy === 'edge' ? 'Edge' : 'SSR'} version, compare with the{' '}
        <span className="underline">
          <Link href="/static">static</Link>
        </span>{' '}
        or{' '}
        <span className="underline">
          <Link href={strategy === 'edge' ? '/ssr' : '/edge'}>
            {strategy === 'edge' ? 'SSR' : 'Edge'}
          </Link>
        </span>{' '}
        version.
      </p>
    </>
  )
}

