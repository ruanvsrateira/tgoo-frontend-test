import { Box, Button, Container, useMediaQuery } from "@mui/material";
import { Logo } from "../../components/Logo/Logo";
import theme from "../../theme";
import { ArrowBack, Delete } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { SELECTED_POST_DATA } from "../../storages/storages";
import { API } from "../../services/axios";
import { toast } from "react-toastify";
import { DataView } from "../../components/DataView/DataView";

export const DeletePost = () => {
  const breaker800px = useMediaQuery("(max-width: 800px)");
  const [postSelectedData] = useAtom(SELECTED_POST_DATA);
  const navigation = useNavigate();

  function handleConfirmDeletePost() {
    console.log(postSelectedData);
    API.delete(`/posts/${postSelectedData.id}`).then(({ data }) => {
      if (!data) {
        toast.error("Erro ao Remover Post!");
      } else {
        toast.success("Post Deletado com Sucesso!");
        navigation("/");
      }
    });
  }

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
      <h1
        style={{
          fontFamily: theme.fonts.Poppins,
          fontWeight: "normal",
          marginTop: "78px",
        }}
      >
        Deletar Post com os Seguintes dados
      </h1>

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
        <Button
          variant="outlined"
          onClick={handleConfirmDeletePost}
          style={
            breaker800px
              ? {
                  justifyContent: "center",
                  height: 50,
                  width: "100%",
                  backgroundColor: "#FFFFF",
                  border: "1px solid red",
                  borderColor: theme.colors["main-red"],
                  color: theme.colors["main-red"],
                }
              : {
                  height: 50,
                  backgroundColor: "#FFFFF",
                  border: `1px solid ${theme.colors["main-red"]}`,
                  color: theme.colors["main-red"],
                }
          }
          endIcon={<Delete />}
          size="large"
          type="submit"
        >
          Finalizar
        </Button>
      </Box>
    </Container>
  );
};
