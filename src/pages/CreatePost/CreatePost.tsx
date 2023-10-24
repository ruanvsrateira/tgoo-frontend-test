import { Box, Container, Button } from "@mui/material";
import { Logo } from "../../components/Logo/Logo";
import { ArrowBack, Check } from "@mui/icons-material";
import theme from "../../theme";
import { Link } from "react-router-dom";
import { IPostSchema, postSchema } from "../../schemas/post.schema";
import { Input } from "../../components/Input/Input";
import { usePostForm } from "../../hooks/usePostForm";
import { API } from "../../services/axios";
import { toast } from "react-toastify";

export const CreatePost = () => {
  const formik = usePostForm({
    onSubmit: (values) => {
      handleCreatePost(values);
    },
    validationSchema: postSchema,
  });

  function handleCreatePost(data: IPostSchema) {
    console.log(data);
    API.post("/posts", data).then(({ data }) => {
      if (!data) {
        console.log(data);
        toast.error("Deu Errado");
      } else {
        console.log(data);
        toast.success("Deu certo");
      }
    });
  }

  return (
    <Container>
      <Box mt={2}>
        <Logo />
      </Box>
      <h1
        style={{
          fontFamily: theme.fonts.Poppins,
          fontWeight: "normal",
          marginTop: "78px",
        }}
      >
        Registrar de Novo Post
      </h1>

      <form onSubmit={formik.handleSubmit}>
        <Box display="flex" alignItems="center" gap={2}>
          <Input
            label="Título da Postagem"
            fullWidth
            name="title"
            error={!!formik.errors.title}
            helperText={formik.errors.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            label="Título SEO"
            fullWidth
            name="seo_title"
            value={formik.values.seo_title}
            error={!!formik.errors.seo_title}
            helperText={formik.errors.seo_title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            label="Tags(usar separador como a ,)"
            fullWidth
            name="tags"
            value={formik.values.tags}
            error={!!formik.errors.tags}
            helperText={formik.errors.tags}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <Input
            label="Link do Youtube"
            fullWidth
            name="youtube_link"
            value={formik.values.youtube_link}
            error={!!formik.errors.youtube_link}
            helperText={formik.errors.youtube_link}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            label="Tags SEO"
            fullWidth
            name="seo_tags"
            value={formik.values.seo_tags}
            error={!!formik.errors.seo_tags}
            helperText={formik.errors.seo_tags}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <Input
            label="Texto Primário"
            fullWidth
            name="text_primary"
            value={formik.values.text_primary}
            error={!!formik.errors.text_primary}
            helperText={formik.errors.text_primary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            label="Text Secundário"
            fullWidth
            name="text_secondary"
            value={formik.values.text_secondary}
            error={!!formik.errors.text_secondary}
            helperText={formik.errors.text_secondary}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>
        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <Input
            title="Plfeafaef"
            label="Publicado em"
            placeholder="Publicado em"
            fullWidth
            type="datetime-local"
            name="published_at"
            value={formik.values.published_at}
            error={!!formik.errors.published_at}
            helperText={formik.errors.published_at}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            fullWidth
            label="destaque até"
            type="datetime-local"
            name="featured_until"
            value={formik.values.featured_until}
            error={!!formik.errors.featured_until}
            helperText={formik.errors.featured_until}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>

        <Box display="flex" gap={2} mt={4}>
          <Link to="/">
            <Button
              variant="contained"
              style={{ backgroundColor: theme.colors["main-red"] }}
              startIcon={<ArrowBack />}
              size="large"
            >
              Voltar para Home
            </Button>
          </Link>
          <Button
            variant="contained"
            style={{ backgroundColor: theme.colors["main-green"] }}
            endIcon={<Check />}
            size="large"
            type="submit"
          >
            Finalizar
          </Button>
        </Box>
      </form>
    </Container>
  );
};
