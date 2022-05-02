import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { _Text } from "../../atoms/text";
import { useUserData } from "../../../contexts/userData";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const _Modal = ({
  openModal,
  closeModal,
  submitModal,
  amount,
}: {
  openModal: boolean;
  closeModal: Function;
  submitModal: Function;
  amount: string;
}) => {
  const { name, account, cpf } = useUserData();
  return (
    <Dialog
      open={openModal}
      TransitionComponent={Transition}
      keepMounted
      //onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"DESTINO"}</DialogTitle>
      <DialogContent>
        <_Text>{`NOME: ${name}`}</_Text>
        <_Text>{`CONTA: ${account}`}</_Text>
        <_Text>{`CPF: ${cpf}`}</_Text>
        <_Text>{`VALOR A TRANSFERIR: R$ ${amount}`}</_Text>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeModal()}>Cancelar</Button>
        <Button onClick={() => submitModal()}>Confirmar</Button>
      </DialogActions>
    </Dialog>
  );
};

export { _Modal };
