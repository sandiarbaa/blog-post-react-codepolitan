import React from "react";
import Button from "../../elements/Button";

interface SearchBarProps {
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
  handleSearchClear: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  searchQuery: string;
}

const SearchBar = ({
  onSearchChange,
  handleSearchClick,
  handleSearchClear,
  handleKeyDown,
  searchQuery,
}: SearchBarProps) => {
  return (
    <div className="my-3">
      <label htmlFor="search" className="text-sm font-semibold mr-3">
        Search :
      </label>
      <input
        type="text"
        id="search"
        className="border text-sm px-2 py-1 rounded-md shadow"
        value={searchQuery}
        onChange={onSearchChange}
        onKeyDown={handleKeyDown}
      />
      <Button handleSearchClick={handleSearchClick} buttonText="Search" />
      <Button handleSearchClear={handleSearchClear} buttonText="Clear" />
    </div>
  );
};

export default SearchBar;
