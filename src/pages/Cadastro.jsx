import React from 'react'
import FormularioCadastro from '../components/FormularioCadastro/FormularioCadastro'

export default function Cadastro(){
  return (
    <div style={{maxWidth:720, margin:'0 auto', padding:24}}>
      <h2>Formulário de Cadastro - Adoção</h2>
      <p>Preencha seus dados para iniciar o processo de adoção.</p>
      <FormularioCadastro />
    </div>
  )
}
