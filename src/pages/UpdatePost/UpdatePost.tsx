import { Box, Container, useMediaQuery } from "@mui/material";
import { Logo } from "../../components/Logo/Logo";
import theme from "../../theme";
import { IPostSchema, postSchema } from "../../schemas/post.schema";
import { usePostForm } from "../../hooks/usePostForm";
import { API } from "../../services/axios";
import { toast } from "react-toastify";
import { useAtom } from "jotai";
import { SELECTED_POST_DATA } from "../../storages/storages";
import { Form } from "../../components/Form/Form";
import { useEffect } from "react";

export const UpdatePost = () => {
  const breaker800px = useMediaQuery("(max-width: 800px)");
  const [postSelectedData] = useAtom(SELECTED_POST_DATA);

  useEffect(() => console.log(postSelectedData));

  function handleUpdatePost(data: IPostSchema) {
    console.log(data);
    API.put(`/posts/${data.id}`, data).then(({ data }) => {
      if (!data.success) {
        console.log(data);
        toast.error("Algo deu errado!");
      } else {
        console.log(data);
        toast.success("Post Criado com Sucesso!");
      }
    });
  }

  const formik = usePostForm({
    initialValues: postSelectedData,
    onSubmit: (values) => handleUpdatePost(values),
    validationSchema: postSchema,
  });

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
        Editar Post
      </h1>
      <Form onSubmit={formik.handleSubmit} formik={formik} />
    </Container>
  );
};
