import * as yup from "yup";
export const bookSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Minimum 3 characters")
    .required("Title is required"),
  author: yup
    .string()
    .min(3, "Minimum 3 characters")
    .required("Author is required"),
});
