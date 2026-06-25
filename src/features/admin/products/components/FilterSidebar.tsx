"use client";

import { Fragment } from "react";
import type { Dispatch, SetStateAction } from "react";
import {
Box,
Typography,
IconButton,
Divider,
Accordion,
AccordionSummary,
AccordionDetails,
FormGroup,
FormControlLabel,
Checkbox,
} from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const filterSections = [
"Category",
"Colors",
"Price Range",
"Collections",
"Tags",
"Ratings",
];

type FilterSidebarProps = {
openSidebar: boolean;
setOpenSidebar: Dispatch<SetStateAction<boolean>>;
};

export default function FilterSidebar({
openSidebar,
setOpenSidebar,
}: FilterSidebarProps) {
return (
<Box
    sx={{
    width: { xs: "100%", sm: 320, md: 280 },
    minWidth: { md: 280 },
    backgroundColor: "#F8F8F8",
    borderRight: "1px solid #E5E7EB",
    height: "100%",
    maxHeight: { xs: "calc(100vh - 64px)", md: "none" },
    overflowY: "auto",
    display: { xs: openSidebar ? "block" : "none", md: "block" },
    "&::-webkit-scrollbar": { display: "none" },
    }}
>
    <Box
    sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 3,
        pb: 2,
    }}
    >
    <Typography
        sx={{
        fontWeight: 900,
        color: "#000",
        fontSize: "1.5rem",
        letterSpacing: "0.5px",
        }}
    >
        Filters
    </Typography>
    <IconButton onClick={() => setOpenSidebar(false)} size="small">
        <ArrowBackIosNewIcon sx={{ fontSize: "16px", color: "#000" }} />
    </IconButton>
    </Box>

    <Box sx={{ px: 3, pb: 2 }}>
    <Typography
        sx={{ fontWeight: 800, color: "#000", mb: 2, fontSize: "1.1rem" }}
    >
        Size
    </Typography>
    <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {["XS", "S", "M", "L", "XL", "2X"].map((size) => (
        <Box
            key={size}
            sx={{
            border: "1px solid #D1D5DB",
            width: "36px",
            height: "36px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "12px",
            fontWeight: 600,
            color: "#000",
            backgroundColor: "transparent",
            cursor: "pointer",
            transition: "0.2s",
            "&:hover": { borderColor: "#000", backgroundColor: "#E5E7EB" },
            }}
        >
            {size}
        </Box>
        ))}
    </Box>
    </Box>

    <Divider
    sx={{
        borderStyle: "dotted",
        borderWidth: "1px",
        borderColor: "#D1D5DB",
        mx: 3,
    }}
    />

    <Accordion
    defaultExpanded
    disableGutters
    elevation={0}
    square
    sx={{ backgroundColor: "transparent", "&:before": { display: "none" } }}
    >
    <AccordionSummary
        expandIcon={<KeyboardArrowRightIcon sx={{ color: "#000" }} />}
        sx={{
        px: 3,
        "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
            transform: "rotate(-90deg)",
        },
        }}
    >
        <Typography
        sx={{
            fontWeight: 800,
            color: "#000",
            fontSize: "1.1rem",
            letterSpacing: "0.5px",
        }}
        >
        Availability
        </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ px: 3, pt: 0, pb: 2 }}>
        <FormGroup>
        <FormControlLabel
            control={
            <Checkbox
                size="small"
                sx={{
                color: "#D1D5DB",
                "&.Mui-checked": { color: "#000" },
                padding: "4px 8px",
                }}
            />
            }
            label={
            <Typography
                sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#000",
                letterSpacing: "0.5px",
                }}
            >
                Availability{" "}
                <Typography
                component="span"
                sx={{ color: "#1D4ED8", fontWeight: 800, fontSize: "13px" }}
                >
                (450)
                </Typography>
            </Typography>
            }
        />
        <FormControlLabel
            control={
            <Checkbox
                size="small"
                sx={{
                color: "#D1D5DB",
                "&.Mui-checked": { color: "#000" },
                padding: "4px 8px",
                }}
            />
            }
            label={
            <Typography
                sx={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#000",
                letterSpacing: "0.5px",
                }}
            >
                Out Of Stock{" "}
                <Typography
                component="span"
                sx={{ color: "#1D4ED8", fontWeight: 800, fontSize: "13px" }}
                >
                (18)
                </Typography>
            </Typography>
            }
        />
        </FormGroup>
    </AccordionDetails>
    </Accordion>

    {filterSections.map((section) => (
    <Fragment key={section}>
        <Divider
        sx={{
            borderStyle: "dotted",
            borderWidth: "1px",
            borderColor: "#D1D5DB",
            mx: 3,
        }}
        />

        <Accordion
        disableGutters
        elevation={0}
        square
        sx={{
            backgroundColor: "transparent",
            "&:before": { display: "none" },
        }}
        >
        <AccordionSummary
            expandIcon={<KeyboardArrowRightIcon sx={{ color: "#000" }} />}
            sx={{
            px: 3,
            "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
                transform: "rotate(-90deg)",
            },
            }}
        >
            <Typography
            sx={{
                fontWeight: 800,
                color: "#000",
                fontSize: "1.1rem",
                letterSpacing: "0.5px",
            }}
            >
            {section}
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 3, pt: 0 }}>
            <Typography
            variant="body2"
            sx={{ color: "#666", fontWeight: 500 }}
            >
            Options for {section}...
            </Typography>
        </AccordionDetails>
        </Accordion>
    </Fragment>
    ))}
</Box>
);
}
