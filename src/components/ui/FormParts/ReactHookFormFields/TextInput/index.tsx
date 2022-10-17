import { useFormContext } from "react-hook-form";
import {
  InputBaseComponentProps,
  TextField,
  TextFieldProps,
} from "@mui/material";

type TextFieldVariants = "outlined" | "filled" | "standard";
type TextFieldTypes = "text" | "password" | "email";

type TFieldProps = {
  label: string;
  name: string;
  variant?: TextFieldVariants;
  inputProps?: InputBaseComponentProps;
  type: TextFieldTypes;
  fullWidth?: boolean;
  multiline?: boolean | undefined;
  rows?: number;
} & TextFieldProps;

const TextInput = ({
  label,
  name,
  inputProps,
  variant,
  type,
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
