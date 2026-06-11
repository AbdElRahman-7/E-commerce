"use client";

import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",

  width: "100%",
  height: 44,

  borderRadius: 16,
  border: "1px solid #E5E7EB",
  backgroundColor: "#ffffff",

  transition: "all 0.2s ease",

  "&:hover": {
    backgroundColor: "#F3F4F6",
    borderColor: "#D1D5DB",
  },



  [theme.breakpoints.up("sm")]: {
    width: 260,
  },

  [theme.breakpoints.up("md")]: {
    width: 360,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,

  height: "100%",
  padding: theme.spacing(0, 2),

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  pointerEvents: "none",
  color: "#9CA3AF",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  color: "#111827",

  "& .MuiInputBase-input": {
    width: "100%",
    fontSize: 14,

    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(5)})`,

    "&::placeholder": {
      color: "#9CA3AF",
      opacity: 1,
    },
  },
}));

type SearchInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

const SearchBox = ({
  value,
  onChange,
  placeholder = "Search products...",
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = React.useState(value ?? "");
  const isControlled = value !== undefined;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    if (!isControlled) {
      setSearchValue(nextValue);
    }
    onChange?.(nextValue);
  };

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon fontSize="small" />
      </SearchIconWrapper>

      <StyledInputBase
        value={isControlled ? value : searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        inputProps={{
          "aria-label": "search",
        }}
      />
    </Search>
  );
};

export default SearchBox;