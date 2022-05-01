import type { NextPage } from "next";
import { useRouter } from "next/router";
import { _Input } from "../../components/atoms/input";
import { _Title, _SubTitle, _Text } from "../../components/atoms/text";
import { _Button } from "../../components/atoms/button";
import { useUserData } from "../../contexts/userData";
import { useEffect } from "react";
import { UserApi } from "../../services/user.service";

const Conta: NextPage = () => {
  const router = useRouter();
  const { name, balance, cpf, account, login } = useUserData();
  const { newBalance } = router.query;
  useEffect(() => {
    if (newBalance === "true") {
      UserApi.getUser(account).then((user) => {
        login(user.account, user.balance, user.name, user.cpf);
      });
    }
  }, []);
  return (
    <>
      <_Title>BANCO</_Title>
      <_SubTitle>{`CONTA: ${account}`}</_SubTitle>
      <_SubTitle>{`NOME: ${name}`}</_SubTitle>
      <_SubTitle>{`SALDO: ${balance}`}</_SubTitle>
      <_SubTitle>{`CPF: ${cpf}`}</_SubTitle>
      <_Button onClick={() => router.push("/conta/pagamento")}>
        TRANSFERÊNCIA
      </_Button>
    </>
  );
};

export default Conta;
