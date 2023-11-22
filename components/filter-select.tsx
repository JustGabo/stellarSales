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

function FilterSelect() {
  return (
    <div>
      <Select value="">
        <SelectTrigger className="ring-0 text-sm border-gray-500">
          <SelectValue placeholder="Select Category" />
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Categories</SelectLabel>
              <SelectItem value="All">Hola</SelectItem>
            </SelectGroup>
          </SelectContent>
        </SelectTrigger>
      </Select>
    </div>
  );
}

export default FilterSelect;
