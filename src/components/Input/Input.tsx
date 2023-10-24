import { BaseTextFieldProps, TextField } from "@mui/material";

interface InputProps extends BaseTextFieldProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const Input = (props: InputProps) => {
  return <TextField {...props} />;
};
