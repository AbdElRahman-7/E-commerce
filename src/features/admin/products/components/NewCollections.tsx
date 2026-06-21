import { Box } from "@mui/material";
import { itemData } from "../constants/data";

const NewCollections = () => {
  return (
    <Box
      sx={{
        mt: 25,
        ml: 10,
        display: "flex",
        flexDirection: "row",
        gap: 9,
        objectFit: "cover",
      }}
    >
      {itemData.map((item) => (
        <Box
          key={item.img}
          component="img"
          src={item.img}
          alt={item.title}
          sx={{
            width: "350px",
            height: "350px",
            objectFit: "cover",
          }}
        />
      ))}
    </Box>
  );
};

export default NewCollections;
