import React from "react";

const sizes = {
  xs: "text-xs font-normal leading-[15px]",
  lg: "text-lg font-normal leading-[22px]",
  s: "text-sm font-normal leading-[17px]",
  "2xl": "text-2xl font-medium leading-[30px]",
  xl: "text-xl font-normal leading-[30px]",
  md: "text-base font-normal leading-5",
};

const Text = ({ children, className = "", as, size = "md", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-900 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
