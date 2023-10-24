import * as yup from "yup"

export const postSchema = yup.object({
  title: yup.string().required("Este campo é Obrigatório!"),
  seo_title: yup.string().required("Este campo é Obrigatório!"),
  tags: yup.string().required("Este campo é Obrigatório!"),
  seo_tags: yup.string().required("Este campo é Obrigatório!"),
  text_primary: yup.string().required("Este campo é Obrigatório!"),
  text_secondary: yup.string().required("Este campo é Obrigatório!"),
  youtube_link: yup.string().required("Este campo é Obrigatório!"),
  published_at: yup.string().required("Este campo é Obrigatório!").matches(
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
    'Informe uma data válida no formato yyyy-MM-ddTHH:mm'
  ),
  featured_until: yup.string().required("Este campo é Obrigatório!").matches(
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,
    'Informe uma data válida no formato yyyy-MM-ddTHH:mm'
  ),})

export interface IPostSchema {
  title: string,
  seo_title: string,
  tags: string,
  seo_tags: string,
  text_primary: string,
  text_secondary: string,
  youtube_link: string,
  published_at: string,
  featured_until: string,
}