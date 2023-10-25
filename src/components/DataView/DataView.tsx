import { Box } from "@mui/material";
import { IPostSchema } from "../../schemas/post.schema";
import theme from "../../theme";
import { formatDate } from "../../helpers/date";

interface DataViewProps {
  post: IPostSchema;
}

export const DataView = ({ post }: DataViewProps) => {
  return (
    <Box mt={10}>
      {post.id && (
        <p style={{ fontFamily: theme.fonts.Poppins }}>
          <strong>Identificador: </strong>
          {post.id.toString()}
        </p>
      )}
      <p style={{ fontFamily: theme.fonts.Poppins }}>
        <strong>Titulo: </strong>
        {post.title}
      </p>
      <p style={{ fontFamily: theme.fonts.Poppins }}>
        <strong>Titulo(SEO): </strong>
        {post.seo_title}
      </p>
      <p style={{ fontFamily: theme.fonts.Poppins }}>
        <strong>Tags: </strong>
        {post.tags}
      </p>
      <p style={{ fontFamily: theme.fonts.Poppins }}>
        <strong>Tags(SEO): </strong>
        {post.seo_tags}
      </p>
      <p style={{ fontFamily: theme.fonts.Poppins }}>
        <strong>Texto Primário: </strong>
        {post.text_primary}
      </p>
      <p style={{ fontFamily: theme.fonts.Poppins }}>
        <strong>Texto Segundário: </strong>
        {post.text_secondary}
      </p>
      <p style={{ fontFamily: theme.fonts.Poppins }}>
        <strong>Link do Youtube: </strong>
        {post.youtube_link}
      </p>
      <p style={{ fontFamily: theme.fonts.Poppins }}>
        <strong>Destaque até: </strong>
        {formatDate(post.featured_until)}
      </p>
      <p style={{ fontFamily: theme.fonts.Poppins }}>
        <strong>Publicado Em: </strong>
        {formatDate(post.published_at)}
      </p>
    </Box>
  );
};
