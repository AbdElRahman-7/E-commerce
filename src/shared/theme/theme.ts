import { createTheme } from "@mui/material/styles";

import palette from "./palette";
import typography from "./typography";

const theme = createTheme({
  palette,
  typography,

  shape: {
    borderRadius: 12,
  },
});

export default theme;
