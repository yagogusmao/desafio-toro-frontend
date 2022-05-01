import React, { useState, createContext, useContext, ReactNode } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertColor } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

interface snackbarContextType {
  showSnackbar: Function;
}

const snackbarContextDefaultValues: snackbarContextType = {
  showSnackbar: () => {},
};

const SnackbarContext = createContext<snackbarContextType>(
  snackbarContextDefaultValues
);

const _Snackbar = ({ children }: { children: ReactNode }) => {
  const [{ severity, title, message, guidance }, setSnackbar] = useState<{
    severity: AlertColor;
    title: String;
    message: String;
    guidance: String;
  }>({
    severity: "success",
    title: "",
    message: "",
    guidance: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const showSnackbar = (
    severity: AlertColor,
    title: string,
    message: string,
    guidance: string
  ) => {
    setSnackbar({ severity, title, message, guidance });
    setOpen(true);
  };
  const hideSnackbar = () => setOpen(false);
  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        message={message}
        onClose={hideSnackbar}
        autoHideDuration={5000}
      >
        <Alert severity={severity}>
          <AlertTitle>{title}</AlertTitle>
          {message} — <strong>{guidance}!</strong>
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext.Provider>
  );
};

const useSnackbar = () => {
  const context = useContext(SnackbarContext);
  if (!context)
    throw new Error("useSnackbar must be used within an SnackbarProvider");
  return context;
};

export { _Snackbar, useSnackbar };
