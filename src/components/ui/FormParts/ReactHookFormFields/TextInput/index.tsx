import { useFormContext } from "react-hook-form";
import {
  InputBaseComponentProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

type Variants = "outlined" | "filled" | "standard";
type Types = "text" | "password" | "email";

type TFieldProps = {
  label: string;
  name: string;
  variant: Variants;
  inputProps?: InputBaseComponentProps;
  type: Types;
  fullWidth?: boolean;
  multiline?: boolean | undefined;
  rows?: number;
} & TextFieldProps;

const TextInput = ({
  label,
  name,
  inputProps,
  variant,
  type = "text",
  fullWidth,
  rows,
  multiline,
}: TFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <TextField
        label={label}
        rows={rows}
        multiline={multiline}
        variant={variant}
        error={!!errors[name]}
        type={type}
        fullWidth={fullWidth}
        inputProps={inputProps}
        {...register(name)}
      />
    </>
  );
};

export default TextInput;
