  "use client";

  import { Drawer, Box, Typography } from "@mui/material";
  import { SidebarProps } from "@/shared/types/sidebar";
  import TextField from "@mui/material/TextField";
  import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
  import Button from "@mui/material/Button";
  import { useState } from "react";

  const menuSidebar = ["MEN", "WOMEN", "KIDS"];
  interface FilmOptionType {
    inputValue?: string;
    title: string;
    year?: number;
  }

  const filter = createFilterOptions<FilmOptionType>();

  const top100Films: FilmOptionType[] = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  ];

  export const SidebarAdmin = ({ openSidebar, setOpenSidebar }: SidebarProps) => {
    const [value, setValue] = useState<FilmOptionType | null>(null);

    return (
      <>
        <Drawer
          open={openSidebar}
          onClose={() => setOpenSidebar(false)}
          variant="temporary"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <Box sx={{ width: 260, p: 2 }}>sidebar Admin</Box>
        </Drawer>

        <Box
          sx={{
            width: 350,
            borderRight: "1px solid #E5E7EB",
            backgroundColor: "#fff",
            display: { xs: "none", md: "block" },
            p: 2,
          }}
        >
          {menuSidebar.map((item, index) => (
            <Box key={index}>{item}</Box>
          ))}

          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                setValue({
                  title: newValue,
                });
              } else if (newValue && newValue.inputValue) {
                setValue({
                  title: newValue.inputValue,
                });
              } else {
                setValue(newValue);
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              const { inputValue } = params;
              const isExisting = options.some(
                (option) => inputValue === option.title,
              );
              if (inputValue !== "" && !isExisting) {
                filtered.push({
                  inputValue,
                  title: `Add "${inputValue}"`,
                });
              }

              return filtered;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            id="free-solo-with-text-demo"
            options={top100Films}
            getOptionLabel={(option) => {
              if (typeof option === "string") {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
                          return option.title;
            }}
            renderOption={(props, option) => {
              const { key, ...optionProps } = props;
              return (
                <li key={key} {...optionProps}>
                  {option.title}
                </li>
              );
            }}
            sx={{ width: 300 }}
            freeSolo
            resetHighlightOnMouseLeave
            renderInput={(params) => <TextField {...params} label="Search" />}
          />
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: "48px",
              letterSpacing: "2px",
              mt: 3,
            }}
          >
            New Collection
          </Typography>
          <Box sx={{ py: 9 }}></Box>
          <Box sx={{display:"flex"}}>
            <Button variant="contained">Disable elevation</Button>

            <Button disabled>Disabled</Button>
            <Button>Disabled</Button>
          </Box>
        </Box>
      </>
    );
  };
