import { Box, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

type MonthDropdownProps = {
  value: string;
  onChange: (month: string) => void;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function MonthDropdown({ value, onChange }: MonthDropdownProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <Box
        sx={{
          px: 2,
          py: 1,
          border: "1px solid #E5E7EB",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          cursor: "pointer",
        }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        {value}
        <KeyboardArrowDownIcon fontSize="small" />
      </Box>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {months.map((month) => (
          <MenuItem
            key={month}
            selected={month === value}
            onClick={() => {
              onChange(month);
              setAnchorEl(null);
            }}
          >
            {month}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
