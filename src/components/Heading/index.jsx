import React from "react";

const sizes = {
  "2xl": "text-[80px] font-bold leading-[97px]",
  xl: "text-[64px] font-bold leading-[78px]",
  s: "text-2xl font-bold leading-[30px]",
  md: "text-[33px] font-bold leading-10",
  xs: "text-lg font-bold leading-[22px]",
  lg: "text-5xl font-bold leading-[59px]",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-blue_gray-800 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
