import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {_Input} from '../components/atoms/input' 
import {_Title, _SubTitle, _Text} from '../components/atoms/text'
import {_Button} from '../components/atoms/button'

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <_Title>BANCO</_Title>
      <_SubTitle>SALDO: R$0,00</_SubTitle>
      <_Button onClick={() => router.push('/pagamento?type=PIX')}>PIX</_Button>
      <_Button onClick={() => router.push('/pagamento?type=TED')}>TED</_Button>
    </>
  )
}

export default Home
