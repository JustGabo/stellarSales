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
import {UsingFilterContext} from '@/context/filters'
import { FormEvent } from "react";

function FilterSelect() {

  // usages
  const {filter, setFilter} = UsingFilterContext()

  // functions

  return (
    <div>
      <Select onValueChange={(e)=> setFilter(e)}>
        <SelectTrigger  className="text-sm border-gray-500 ring-0">
          <SelectValue  placeholder={filter} />
          <SelectContent>
            <SelectGroup >
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="men's clothing">{`Men's clothing`}</SelectItem>
              <SelectItem value="women's clothing">{`Women's clothing`}</SelectItem>
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
