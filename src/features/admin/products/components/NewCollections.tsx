import { Box } from "@mui/material";
import { itemData } from "../constants/data";

const NewCollections = () => {
  return (
    <Box
      sx={{
        mt: { xs: 1, md: 0 },
        width: "100%",
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
        gap: { xs: 2, md: 2.5 },
        alignItems: "start",
        maxWidth: { lg: 920 },
      }}
    >
      {itemData.map((item) => (
        <Box
          key={item.img}
          component="img"
          src={item.img}
          alt={item.title}
          sx={{
            width: "100%",
            height: { xs: 280, sm: 340, md: 350, lg: 335 },
            objectFit: "cover",
            display: "block",
            border: "1px solid #ECECEC",
            backgroundColor: "#FAFAFA",
          }}
        />
      ))}
    </Box>
  );
};

export default NewCollections;
