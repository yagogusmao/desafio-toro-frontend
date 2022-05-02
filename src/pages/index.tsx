import type { NextPage } from "next";
import { useRouter } from "next/router";
import { _Input } from "../components/atoms/input";
import { _Title, _SubTitle, _Text } from "../components/atoms/text";
import { _Button } from "../components/atoms/button";
import { useState } from "react";
import { useSnackbar } from "../contexts/snackbar";
import { useUserData } from "../contexts/userData";
import { UserApi } from "../services/user.service";

const Home: NextPage = () => {
  const router = useRouter();
  const { showSnackbar } = useSnackbar();
  const { login } = useUserData();
  const [cpf, setCpf] = useState<string>("");

  const onChangeCpf = (cpf: string) => setCpf(cpf.substring(0, 11));

  const submit = (cpf: string) => {
    if (cpf.length === 11) {
      UserApi.getUserByCpf(cpf)
        .then((user) => {
          const { account, name, balance, cpf } = user;
          login(account, balance, name, cpf);
          router.push(`/conta`);
        })
        .catch((error) =>
          showSnackbar(
            "warning",
            "Campos inválidos",
            "A conta não existe",
            "Digite uma conta existente"
          )
        );
    } else
      showSnackbar(
        "warning",
        "Campos inválidos",
        "O CPF informada não tem 11 dígitos",
        "Digite um CPF com 11 dígitos"
      );
  };

  return (
    <>
      <_Title>BANCO</_Title>
      <_SubTitle>DIGITE O CPF</_SubTitle>
      <_Input whenUpdate={onChangeCpf} value={cpf}>
        CPF
      </_Input>
      <_Button onClick={() => submit(cpf)}>ENTRAR</_Button>
    </>
  );
};

export default Home;
