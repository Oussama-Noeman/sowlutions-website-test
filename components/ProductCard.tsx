import { Product } from '@/types/types'
import Image from 'next/image'
import React from 'react'
import ProductDetailsDialog from './ProductDetailsDialog'

interface params{
    product:Product
}

export default function ProductCard({product}:params) {
  return (
    <div className=' border rounded-md border-gray-200 pt-4'>
        <div className="w-full h-32 relative ">
            <Image src={product.image} alt='product' fill className='object-fit object-contain'/>
        </div>
        <div className="mt-4 px-2">
            <p className=' text-sm text-gray-300 text-end'>
                {product.category}
            </p>
            <p className="text-gray-500 truncate font-semibold mt-2">
                {product.title}
            </p>
            <p className='h-10 overflow-hidden text-sm text-gray-300'>
                {product.description}
            </p>
            <p className="mt-4 font-bold">
                {product.price}$
            </p>
            <ProductDetailsDialog product={product} />
        </div>
    </div>
  )
}
