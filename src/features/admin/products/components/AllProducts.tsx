"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { collections } from "../constants/collections";
import { CardProducts } from "@/shared/components/Products/card/CardProducts";

export default function AllProducts() {
  const [count, setCount] = React.useState(4);
  const [category, setCategory] = React.useState("ALL");
  const [sortType, setSortType] = React.useState("");

  let products = collections;

  if (category !== "ALL") {
    products = products.filter(
      (item) =>
        item.categories?.toLowerCase() === category.toLowerCase()
    );
  }

  if (sortType === "low") {
    products = [...products].sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
  }

  if (sortType === "high") {
    products = [...products].sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  }

  const showProducts = products.slice(0, count);

  return (
    <Box
      sx={{
        width: "100%",
        mx: 0,
        my: { xs: 5, md: 7 },
        px: { xs: 1, sm: 2, md: 0 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 800,
          color: "#1A1A1A",
          lineHeight: 0.95,
          letterSpacing: "-0.5px",
          mb: 3,
          textAlign: {
            xs: "center",
            md: "left",
          },
          fontSize: {
            xs: "2rem",
            sm: "3rem",
            md: "4rem",
            lg: "5rem",
          },
        }}
      >
        XIV COLLECTIONS
        <br />
        23-24
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            md: "center",
          },
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: 3,
          mb: 4,
        }}
      >
        <ToggleButtonGroup
          value={category}
          exclusive
          onChange={(e, value) => {
            if (value) setCategory(value);
          }}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1.5,

            "& .MuiToggleButton-root": {
              border: "none",
              backgroundColor: "transparent",
              color: "#999",
              fontWeight: 500,
              fontSize: {
                xs: "12px",
                sm: "14px",
              },
              textTransform: "uppercase",
              px: 0,
              minWidth: "fit-content",

              "&.Mui-selected": {
                backgroundColor: "transparent",
                color: "#000",
                fontWeight: 700,
              },

              "&:hover": {
                backgroundColor: "transparent",
              },
            },
          }}
        >
          <ToggleButton value="ALL">(ALL)</ToggleButton>
          <ToggleButton value="Morning Picks">Morning Picks</ToggleButton>
          <ToggleButton value="Burgers">Burgers</ToggleButton>
          <ToggleButton value="Desserts">Desserts</ToggleButton>
        </ToggleButtonGroup>

        <Box
          sx={{
            display: "flex",
            alignItems: {
              xs: "flex-start",
              sm: "center",
            },
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: 2,
            width: {
              xs: "100%",
              md: "auto",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              color: "#999",
              fontWeight: 500,
            }}
          >
            Sorts(+)
          </Typography>

          <ToggleButtonGroup
            value={sortType}
            exclusive
            onChange={(e, value) => {
              if (value) setSortType(value);
            }}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1.5,

              "& .MuiToggleButton-root": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
                fontWeight: 500,
                fontSize: {
                  xs: "12px",
                  sm: "14px",
                },
                px: 0,

                "&.Mui-selected": {
                  backgroundColor: "transparent",
                  color: "#000",
                  fontWeight: 700,
                },

                "&:hover": {
                  backgroundColor: "transparent",
                },
              },
            }}
          >
            <ToggleButton value="low">Less to more</ToggleButton>
            <ToggleButton value="high">More to Less</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          },
          gap: 3,
        }}
      >
        {showProducts.map((item) => (
          <CardProducts key={item.id} product={item} />
        ))}
      </Box>

      {count < products.length && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
          }}
        >
          <Button
            variant="text"
            endIcon={<ExpandMoreIcon />}
            onClick={() => setCount((prev) => prev + 4)}
            sx={{
              color: "#222",
              fontWeight: 600,
              fontSize: {
                xs: "14px",
                md: "16px",
              },
              textTransform: "none",

              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            More
          </Button>
        </Box>
      )}
    </Box>
  );
}