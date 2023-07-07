"use client";
import React, { ChangeEvent, FC, useState, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  defaultOption?: string;
  onSelectChange: (value: string) => void;
}

export const Select: FC<SelectProps> = ({
  options,
  defaultOption,
  onSelectChange,
  className,
  ...props
}) => {
  const [selected, setSelected] = useState(defaultOption || "");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    onSelectChange(value);
  };

  return (
    <select
      value={selected}
      onChange={handleChange}
      className={cn(
        "text-gray-700 dark:text-gray-300 form-select block w-full mt-1 bg-white dark:bg-gray-800",
        className
      )}
      {...props}
    >
      <option value="all">All</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
