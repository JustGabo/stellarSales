"use clien";
import {
  Select,
  SelectContent,
  SelectValue,
  SelectTrigger,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

// importing context
import {usingFilterContext} from '@/context/filters'
import { FormEvent } from "react";

function FilterSelect() {

  // usages
  const {filter, setFilter} = usingFilterContext()

  // functions

  return (
    <div>
      <Select onValueChange={(e)=> setFilter(e)}>
        <SelectTrigger  className="ring-0 text-sm border-gray-500">
          <SelectValue  placeholder={filter} />
          <SelectContent>
            <SelectGroup >
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="men's clothing">Men's clothing</SelectItem>
              <SelectItem value="women's clothing">Women's clothing</SelectItem>
              <SelectItem value="jewelery">Jewelery</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>
    </div>
  );
}

export default FilterSelect;
