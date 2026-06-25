"use client";

import Image from "next/image";
import { Box } from "@mui/material";
import { gallery } from "../constants/data";

export default function WovenImageList() {
  const galleryItems = [...gallery, ...gallery];
  const mobileGalleryItems = galleryItems.slice(0, 2);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 8 },
          display: { xs: "flex", md: "none" },
          alignItems: "flex-start",
          gap: 2,
          overflowX: "hidden",
          overflowY: "hidden",
        }}
      >
        {mobileGalleryItems.map((item, index) => (
          <Box
            key={`${item.img}-${index}`}
            sx={{
              position: "relative",
              overflow: "hidden",
              flex: 1,
              minWidth: 0,
              aspectRatio: "3 / 4",
              border: "1px solid #E3E4E7",
              backgroundColor: "#F6F7F8",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              loading="lazy"
              sizes="50vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          width: "100%",
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 8 },
          display: { xs: "none", md: "flex" },
          alignItems: "flex-start",
          gap: { xs: 2, md: 4 },
          overflowX: "auto",
          overflowY: "hidden",
          scrollBehavior: "smooth",
          WebkitOverflowScrolling: "touch",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {galleryItems.map((item, index) => (
          <Box
            key={`${item.img}-${index}`}
            sx={{
              position: "relative",
              overflow: "hidden",
              flex: "0 0 auto",
              width: { xs: 180, sm: 240, md: 370 },
              height: { xs: 240, sm: 320, md: 420 },
              mt: { xs: index % 2 === 1 ? 4 : 0, md: index % 2 === 1 ? 10 : 0 },
              border: "1px solid #E3E4E7",
              backgroundColor: "#F6F7F8",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Image
              src={item.img}
              alt={item.title}
              fill
              loading="lazy"
              sizes="(max-width: 600px) 50vw, 25vw"
              style={{ objectFit: "cover" }}
            />
          </Box>
        ))}
      </Box>
    </>
  );
}