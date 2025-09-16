'use client'
import { Product } from '@/types/types'
import React, { useState } from 'react'
import ProductCard from './ProductCard';

interface params{
  products:Product[] | null;
}

export default function HomePage({products}:params) {
  const [items,setItems] = useState(products);
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, id: string) => {
  e.dataTransfer.setData('text/plain', id);
};
const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
  e.preventDefault(); // Prevent default to allow dropping
};

// const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetId: string) => {
//   e.preventDefault();
//   const draggedItemId = e.dataTransfer.getData('text/plain');
//   const draggedItemIndex = items?.findIndex((item) => item.title === draggedItemId);
//   const targetItemIndex = items?.findIndex((item) => item.title === targetId);

//   if (draggedItemIndex === -1 || targetItemIndex === -1) return;

//   const newItems = [...items] ?? [];
//   const [draggedItem] = newItems.splice(draggedItemIndex, 1);
//   newItems.splice(targetItemIndex, 0, draggedItem);

//   setItems(newItems);
// };
  return (
    <div className='py-20'>
      <h1 className="text-center text-6xl font-bold">
        Products
      </h1>
      <div className="grid grid-cols-6 gap-10 mt-16">
        {products?.map(product => (
          <div key={product.id}
            draggable="true"
            onDragStart={(e) => handleDragStart(e, product.title)}>
            <ProductCard key={product.id} product={product}  />
            </div>
        ))}
      </div>
    </div>
  )
}
