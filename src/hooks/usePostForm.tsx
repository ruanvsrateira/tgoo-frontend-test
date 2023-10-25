import { useFormik } from "formik";
import { ObjectSchema } from "yup";
import { IPostSchema } from "../schemas/post.schema";

interface usePostForm {
  onSubmit: (values: IPostSchema) => void;
  validationSchema: ObjectSchema<IPostSchema>;
  initialValues?: IPostSchema;
}

export function usePostForm({
  onSubmit,
  validationSchema,
  initialValues,
}: usePostForm) {
  return useFormik({
    initialValues: initialValues || {
      title: "",
      seo_title: "",
      tags: "",
      seo_tags: "",
      text_primary: "",
      text_secondary: "",
      youtube_link: "",
      published_at: "mm/dd/yyyy, --:-- --",
      featured_until: "mm/dd/yyyy, --:-- --",
    },
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
    validationSchema,
  });
}
