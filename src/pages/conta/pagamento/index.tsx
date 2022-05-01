import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { _Title, _SubTitle, _Text } from "../../../components/atoms/text";
import { _Input } from "../../../components/atoms/input";
import { _Button } from "../../../components/atoms/button";
import { _Modal } from "../../../components/molecules/modal";
import { useSnackbar } from "../../../contexts/snackbar";
import { useUserData } from "../../../contexts/userData";
import { TransferApi } from "../../../services/transfer.service";

const Pagamento: NextPage = () => {
  const router = useRouter();
  const { showSnackbar } = useSnackbar();
  const { account, cpf } = useUserData();

  const [targetAccount, setTargetAccount] = useState<String>("");
  const onChangeTargetAccount = (targetAccount: String) =>
    setTargetAccount(targetAccount.substring(0, 6));

  const [amount, setAmount] = useState<String>("");
  const onChangeAmount = (amount: String) => setAmount(amount.substring(0, 6));

  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);

  const submitForm = () => {
    if (validations()) {
      const body = {
        event: "TRANSFER",
        target: {
          bank: "352",
          branch: "0001",
          account: targetAccount,
        },
        origin: {
          bank: "033",
          branch: "3312",
          cpf: cpf,
        },
        amount: Number(amount),
      };
      TransferApi.createTransfer(body)
        .then((transfer) => {
          showSnackbar(
            "success",
            "Transferência concluída",
            "Dinheiro enviado",
            "Parabéns por concluir a transferência"
          );
          router.push("/conta?newBalance=true");
        })
        .catch((error) => {
          console.log(error);
          showSnackbar(
            "error",
            "Transferência não concluída",
            "Dinheiro não enviado",
            error.message
          );
        });
    }
  };

  const validations = () => {
    let flag = true;
    if (!(targetAccount.length === 6)) {
      flag = false;
      showSnackbar(
        "warning",
        "Campos inválidos",
        "A conta tem mais de 6 dígitos",
        "Digite uma conta com 6 dígitos"
      );
    }
    if (!(typeof Number(amount) === "number" && Number(amount) > 0)) {
      flag = false;
      showSnackbar(
        "warning",
        "Campos inválidos",
        "O valor a transferir deve ser maior que 0",
        "Digite um valor acima de 0"
      );
    }
    return flag;
  };

  const submitModal = () => router.push("/conta/pagamento/confirmado");

  return (
    <>
      <_Title>PAGAMENTO</_Title>
      <_Text>DIGITE OS DADOS DA CONTA</_Text>
      <_Input value="352" disabled={true}>
        BANCO
      </_Input>
      <_Input value="0001" disabled={true}>
        AGÊNCIA
      </_Input>
      <_Input value={targetAccount} whenUpdate={onChangeTargetAccount}>
        CONTA
      </_Input>
      <_Input value={amount} whenUpdate={onChangeAmount}>
        VALOR
      </_Input>
      <_Button onClick={() => submitForm()}>CONFIRMAR</_Button>
      <_Modal
        openModal={openModal}
        closeModal={closeModal}
        submitModal={submitModal}
      ></_Modal>
    </>
  );
};

export default Pagamento;
