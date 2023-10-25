import { Box, Button, Container, useMediaQuery } from "@mui/material";
import { useAtom } from "jotai";
import { Link } from "react-router-dom";
import { SELECTED_POST_DATA } from "../../storages/storages";
import { DataView } from "../../components/DataView/DataView";
import { Logo } from "../../components/Logo/Logo";
import { ArrowBack } from "@mui/icons-material";
import theme from "../../theme";

export const PostDetails = () => {
  const breaker800px = useMediaQuery("(max-width: 800px)");
  const [postSelectedData] = useAtom(SELECTED_POST_DATA);

  return (
    <Container>
      <Box
        mt={2}
        style={
          breaker800px
            ? {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }
            : {}
        }
      >
        <Logo />
      </Box>
      <DataView post={postSelectedData} />
      <Box
        display="flex"
        gap={2}
        mt={4}
        style={
          breaker800px
            ? {
                flexDirection: "column",
                justifyContent: "center",
                width: "100%",
              }
            : {}
        }
      >
        <Link to="/">
          <Button
            variant="contained"
            style={
              breaker800px
                ? {
                    justifyContent: "center",
                    width: "100%",
                    height: 50,
                    backgroundColor: theme.colors["main-red"],
                  }
                : {
                    backgroundColor: theme.colors["main-red"],
                  }
            }
            startIcon={<ArrowBack />}
            size="large"
          >
            Voltar para Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};
