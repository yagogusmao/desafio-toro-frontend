import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import {useState} from 'react'
import {_Title, _SubTitle, _Text} from '../../components/atoms/text'
import {_Input} from '../../components/atoms/input'
import {_Button} from '../../components/atoms/button'
import {_Modal} from '../../components/molecules/modal'

const Pagamento: NextPage = () => {
  const router = useRouter();
  const {type} = router.query;
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
  const keyValidate = () => true;
  const submitForm = () => keyValidate() && setOpenModal(true);
  const submitModal = () => router.push('/pagamento/confirmado')
  // const keyValidate = () => {
  // função pra validar CHAVE OU CONTA  
  // }
  return (
    <>
    <_Title>PAGAMENTO</_Title>
      {type === "PIX" ?
        <>
          <_Text>DIGITE A CHAVE PIX</_Text>
          <_Input>CHAVE</_Input>
          <_Input>VALOR</_Input>
        </>
        :
        <>
          <_Text>DIGITE OS DADOS DA CONTA</_Text>
          <_Input>BANCO</_Input>
          <_Input>AGENCIA</_Input>
          <_Input>CONTA</_Input>
          <_Input>VALOR</_Input>
        </>
      }
      <_Button onClick={() => submitForm()}>CONFIRMAR</_Button>
      <_Modal openModal={openModal} closeModal={closeModal} submitModal={submitModal}></_Modal>
    </>
  )
}

export default Pagamento
