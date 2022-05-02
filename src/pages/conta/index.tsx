import type { NextPage } from "next";
import { useRouter } from "next/router";
import { _Input } from "../../components/atoms/input";
import { _Title, _SubTitle, _Text } from "../../components/atoms/text";
import { _Button } from "../../components/atoms/button";
import { useUserData } from "../../contexts/userData";
import { useEffect, useState } from "react";
import { UserApi } from "../../services/user.service";
import { _Table } from "../../components/atoms/table";
import { TransferApi } from "../../services/transfer.service";

interface Transfer {
  id: number;
  target_bank: string;
  target_branch: string;
  target_account: string;
  origin_bank: string;
  origin_branch: string;
  origin_cpf: string;
  event: string;
  amount: number;
}

const columnsName = [
  "ID",
  "EVENTO",
  "VALOR",
  "CONTA DE DESTINO",
  "AGÊNCIA DE DESTINO",
  "BANCO DE DESTINO",
  "BANCO DE ORIGEM",
  "AGÊNCIA DE ORIGEM",
  "CPF DE ORIGEM",
];

const propsName = [
  "id",
  "event",
  "amount",
  "target_account",
  "target_branch",
  "target_bank",
  "origin_bank",
  "origin_branch",
  "origin_cpf",
];

const Conta: NextPage = () => {
  const router = useRouter();
  const { name, balance, cpf, account, login } = useUserData();
  const { newBalance } = router.query;
  const [transfers, setTransfers] = useState<Transfer[]>([]);
  useEffect(() => {
    if (newBalance === "true") {
      UserApi.getUser(account).then((user) => {
        login(user.account, user.balance, user.name, user.cpf);
      });
    }
    TransferApi.getTransfers(account).then((transfers) => {
      setTransfers(transfers);
    });
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
      <_Table
        columnsName={columnsName}
        rows={transfers}
        propsName={propsName}
      />
    </>
  );
};

export default Conta;
