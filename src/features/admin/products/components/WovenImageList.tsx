"use client";

import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "../constants/data";

export default function WovenImageList() {
  return (
    <ImageList variant="woven" cols={4} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img} sx={{ position: "relative", overflow: "hidden" }}>
          <Image
            src={item.img}
            alt={item.title}
            fill
            loading="lazy"
            sizes="(max-width: 600px) 50vw, 25vw"
            style={{ objectFit: "cover" }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}