import {useContext, createContext, useState, useEffect} from "react"

interface FilterProps{
    children: React.ReactNode
}


interface FilterState {
    filter: string,
    setFilter: (filter: string)=> void
}

const initialState = {
    filter: "",
    setFilter: ()=>{}
}
const FilterContext = createContext<FilterState>(initialState)

export const usingFilterContext = ()=>{
    const context = useContext(FilterContext)
    return context
}

export function FiltersProvider({children}: FilterProps) {
    // usages
    const [filter, setFilter] = useState("All")

    const value = {
        filter,
        setFilter
    }

    useEffect(()=>{
      console.log(filter)
    },[filter])

  return (
    <FilterContext.Provider  value={value}>
      {
       children 
      }
    </FilterContext.Provider>
  )
}

