import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {_Title, _SubTitle, _Text} from '../../../components/atoms/text'
import {_Button} from '../../../components/atoms/button'

const Confirmado: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <_Title>PAGAMENTO CONFIRMADO</_Title>
      <_SubTitle>SALDO: R$0,00</_SubTitle>
      <_Button onClick={() => router.push('/')}>HOME</_Button>
    </>
  )
}

export default Confirmado
