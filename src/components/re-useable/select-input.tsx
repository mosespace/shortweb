import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

type Option = {
  value: string;
  label: string;
};

export default function FormSelectInput({
  label,
  optionsArray,
  selected,
  setSelected,
  className = "sm:col-span-2 mt-2",
}: {
  label: string;
  optionsArray: Option[];
  selected: string;
  setSelected: any;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <Select
        defaultValue={selected}
        onValueChange={(item: any) => setSelected(item)}
      >
        <SelectTrigger className={className}>
          <SelectValue placeholder='Select...' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {optionsArray.map((item, i: number) => {
              return (
                <SelectItem key={i} value={item.value}>
                  {item.label}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
