'use client'
import {Product} from '@/types/index'
// importing context
import {UsingCartContext} from '@/context/cartContext'

function CartItems() {

    // context
    const {cart} = UsingCartContext()

  return (
    <div className='grid gap-5'>
      {cart.map((product: Product)=> {
        return (
            <div key={product.id} className='border-y p-2 flex items-center gap-3'>
                <div className='w-[20%]'>
                    <img className='h-[200px] w-full object-contain' src={product.image} alt="" />
                </div>
                <div className='w-[60%]'>
                    <h3 className='text-xs line-clamp-1'>{product.title}</h3>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default CartItems
