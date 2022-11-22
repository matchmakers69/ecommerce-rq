import * as yup from "yup";
export const searchFormSchema = yup.object().shape({
  filterValue: yup
    .string()
    .required("Enter your search value")
    .max(12, "Too many characters")
    .min(3, "3 characters are required"),
});
