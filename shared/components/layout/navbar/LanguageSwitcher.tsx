import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState("en");

  return (
    <FormControl size="small" sx={{ width: 100 }}>
      <Select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        sx={{
          borderRadius: 3,
          backgroundColor: "#F9FAFB",

          "& .MuiSelect-select": {
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <MenuItem value="en">EN</MenuItem>

        <MenuItem value="ar">AR</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSwitcher;
