"use client";

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const DropdownPortal: React.FC<PortalProps> = ({ children }) => {
  const el = useRef(document.createElement("div"));

  useEffect(() => {
    const currentEl = el.current;
    document.body.appendChild(currentEl);
    return () => {
      document.body.removeChild(currentEl);
    };
  }, []);

  return ReactDOM.createPortal(children, el.current);
};

interface SelectProps extends React.HTMLProps<HTMLDivElement> {
  options: string[];
  onOptionSelect: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({
  value,
  options,
  onOptionSelect,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value || options[0]);
  const selectRef = useRef<HTMLDivElement | null>(null);
  const [dropdownStyle, setDropdownStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const handleOptionClick = (option: string) => {
    setSelected(option);
    setOpen(false);
    onOptionSelect(option);
  };

  // @todo bug
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       selectRef.current &&
  //       !selectRef.current.contains(event.target as Node)
  //     ) {
  //       setOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  useLayoutEffect(() => {
    if (selectRef.current) {
      const rect = selectRef.current.getBoundingClientRect();
      setDropdownStyle({
        top: rect.top + rect.height,
        left: rect.left,
        width: rect.width,
      });
    }
  }, [selectRef]);

  return (
    <div ref={selectRef} {...props}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
        className="mt-1 block w-full py-2 px-3 border capitalize border-gray-300 bg-white min-w-[180px]  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm cursor-pointer"
      >
        {selected}
      </div>
      {open && (
        <DropdownPortal>
          <div
            style={dropdownStyle}
            className="absolute bg-white shadow p-2 rounded z-10 w-full mt-3 max-h-[300px] overflow-auto"
          >
            {options.map((option, index) => (
              <div
                key={index}
                className={`cursor-pointer p-2 capitalize ${
                  option === selected ? "bg-blue-200" : ""
                } hover:bg-blue-100`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionClick(option);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </DropdownPortal>
      )}
    </div>
  );
};

export default Select;
