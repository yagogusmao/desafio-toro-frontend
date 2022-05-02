import * as React from "react";
import TextField from "@mui/material/TextField";

const _Input = ({
  children,
  value,
  whenUpdate,
  disabled,
}: {
  children: string;
  value: string;
  whenUpdate?: (value: string) => void;
  disabled?: boolean;
}) => {
  const onChange = (event: any, calledFunction: any) => {
    const { value } = event.target;
    calledFunction(value);
  };
  return (
    <TextField
      id="standard-basic"
      label={children}
      variant="standard"
      value={value}
      onChange={(e) => onChange(e, whenUpdate)}
      disabled={disabled}
    />
  );
};

export { _Input };
