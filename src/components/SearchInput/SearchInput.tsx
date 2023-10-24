import { TextField } from "@mui/material";
import { InputHTMLAttributes } from "react";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
}

export const SearchInput = ({ value, label, onChange }: SearchInputProps) => {
  return (
    <TextField
      fullWidth
      id="outlined-search"
      label={label}
      value={value}
      onChange={onChange}
    />
  );
};
