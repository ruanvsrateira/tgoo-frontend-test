import { atom } from "jotai";
import { IPostSchema } from "../schemas/post.schema";

export const SELECTED_POST_DATA = atom<IPostSchema>({
  title: "",
  seo_title: "",
  tags: "",
  seo_tags: "",
  text_primary: "",
  text_secondary: "",
  youtube_link: "",
  published_at: "mm/dd/yyyy, --:-- --",
  featured_until: "mm/dd/yyyy, --:-- --",
});
