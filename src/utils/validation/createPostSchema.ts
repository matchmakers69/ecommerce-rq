import * as yup from "yup";
export const createPostSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, "Minimum 3 characters")
    .required("Title is required"),
  body: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Body is required"),
});
