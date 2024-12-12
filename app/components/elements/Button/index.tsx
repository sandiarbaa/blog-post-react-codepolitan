import React from "react";

interface ButtonProps {
  handleSearchClick?: () => void;
  handleSearchClear?: () => void;
  buttonText: string;
}

const Button = ({
  handleSearchClick,
  handleSearchClear,
  buttonText,
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={handleSearchClick || handleSearchClear}
      className="bg-black text-white font-semibold text-sm rounded-md px-2 py-1 ml-2 active:bg-slate-700"
    >
      {buttonText}
    </button>
  );
};

export default Button;
