"use client";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { SearchBarProps } from "./types";

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [keywords, setKeywords] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value);
  };

  React.useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onSearch(keywords);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [keywords, onSearch]);

  return (
    <InputGroup maxW="md" bg="#383733" borderRadius="4px">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="white" />
      </InputLeftElement>
      <Input
        focusBorderColor="white"
        borderRadius="4px"
        color="white"
        borderColor="#797670"
        borderWidth="2px"
        boxSizing="border-box"
        outline="none"
        value={keywords}
        onChange={handleInputChange}
        placeholder="Search here"
        size="md"
      />
    </InputGroup>
  );
};
