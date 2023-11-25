'use client'
import {Product} from '@/types/index'
// importing context
import {UsingCartContext} from '@/context/cartContext'
import {X, Plus, Minus} from 'lucide-react'
import {Button} from '@/components/ui/button'

function CartItems() {

    // context
    const {cart, decreaseAmount, increaseAmount, addProduct} = UsingCartContext()

  return (
    <div className='grid gap-5 overflow-y-auto'>
      {cart.map((product: Product)=> {
        return (
            <div key={product.id} className='flex items-center gap-5 px-2 border-y'>
                <div className='w-[20%] py-3'>
                    <img className='h-[100px] w-full object-contain' src={product.image} alt="" />
                </div>
                <div className='w-[80%] flex flex-col gap-5'>
                    <div className='flex items-center justify-between'>
                    <h3 className='text-xs uppercase line-clamp-1' >{product.title}</h3>
                    <X width={15} height={15} className='cursor-pointer'/>
                    </div>
                    <div>
                      <div className='flex items-center gap-5'>
                        <Minus className='cursor-pointer' onClick={()=> decreaseAmount(product.id)} width={17}/>
                        <p className='text-xs'>{product.amount}</p>
                        <Plus className='cursor-pointer' onClick={()=> increaseAmount(product.id)} width={17}/>
                      </div>
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default CartItems
