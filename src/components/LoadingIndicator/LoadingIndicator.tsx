import { Box } from "@mui/material";
import ReactLoading from "react-loading";
import theme from "../../theme";

export const LoadingIndicator = () => {
  return (
    <Box mt={10} display="flex" alignItems="center" justifyContent="center">
      <ReactLoading
        width={40}
        height={40}
        color={theme.colors["main-orange"]}
        type="spin"
      />
    </Box>
  );
};
