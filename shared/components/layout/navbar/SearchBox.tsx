
import SearchIcon from "@mui/icons-material/Search";
import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 12,
  backgroundColor: "#F3F4F6",

  "&:hover": {
    backgroundColor: "#E5E7EB",
  },

  width: "100%",

  [theme.breakpoints.up("sm")]: {
    width: "260px",
  },

  [theme.breakpoints.up("md")]: {
    width: "360px",
  },
}));


const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),

  height: "100%",

  position: "absolute",

  pointerEvents: "none",

  display: "flex",

  alignItems: "center",

  justifyContent: "center",

  color: "#6B7280",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#111827",

  width: "100%",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1.2, 1, 1.2, 0),

    paddingLeft: `calc(1em + ${theme.spacing(5)})`,
  },
}));

const SearchBox = () => {
  return (
  <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
  
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{
                    "aria-label": "search",
                  }}
                />
              </Search>
  );
};

export default SearchBox;
