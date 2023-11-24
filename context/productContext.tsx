import {useState, useEffect, useContext, createContext} from 'react'
import {Product} from '@/types/index'

interface Props {
    children: React.ReactNode
}

interface ProductState {
    products: Product[]
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

const initialState = {
    products: [],
    setProducts: () => {}
}

export const UsingProductContext = () => {
    const context = useContext(ProductContext)
    return context
}

const ProductContext = createContext<ProductState>(initialState)

export function ProductContextProvider({children}: Props) {
    const [products, setProducts] = useState<Product[]>([])

    const callApi = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const res = await response.json();
        setProducts(res)
      };  

    useEffect(()=>{
        callApi()
    },[])

    const value = {
        products,
        setProducts
    }

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

