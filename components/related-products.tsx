'use client'

import ProductsCard from '@/components/related-products-card'


// importing context
import {UsingProductContext} from '@/context/productContext'

interface Props {
    id: number
}

function RelatedProducts({id}: Props) {

    // usages
    const {products} = UsingProductContext()
    const baseProduct = products.find((product)=> product.id == id)
    const relatedProducts = products.filter((product)=> product.category == baseProduct?.category  && product.id != id)

    // effects

  return (
    <div>
        <h2 className='mb-10 text-2xl font-bold'>Related Products</h2>
        <ProductsCard products={relatedProducts}/>
    </div>
  )
}

export default RelatedProducts