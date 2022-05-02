import * as React from "react";
import Button from "@mui/material/Button";

const _Button = ({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};

export { _Button };
