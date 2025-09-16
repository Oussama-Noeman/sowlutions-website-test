import React, { useState } from 'react'
import Modal from './Modal';
import { Product } from '@/types/types';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface params{
    product:Product
}

export default function ProductDetailsDialog({product}:params) {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="h-full">
      <button
        onClick={openModal}
        className="my-4 py-2 w-full bg-black text-white rounded hover:bg-gray-600 cursor-pointer"
      >
        Show Details
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className=" flex h-full">
            <div className="w-1/2 h-full  flex justify-center items-center">
                <Image src={product.image} alt='product' width={400} height={400} />
            </div>
            <div className="w-1/2 px-4 py-10">
                <h1 className='text-4xl font-semibold'>
                    {product.title}
                </h1>
                <p className='mt-2 text-gray-400'>
                    Category: {product.category}
                </p>
                <p className="mt-4 text-lg">
                    {product.description}
                </p>
                <div className="w-full mt-10 text-2xl flex justify-between">
                    <p className=" font-bold">
                        {product.price}$
                    </p>
                    <div className='flex gap-2 items-center text-amber-400'>
                        <p>{product.rating.rate} </p>
                        <Star />
                        <p>{`(${product.rating.count})`}</p>
                        </div>
                </div>
                <div className="w-full bg-black text-white rounded-md text-center mt-10 py-4 ">
                    Add To Cart
                </div>
            </div>
        </div>
      </Modal>
    </div>
  )
}
