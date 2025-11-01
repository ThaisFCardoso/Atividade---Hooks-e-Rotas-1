import React, { useState, useRef, useEffect } from 'react'
import styles from './FormularioCadastro.module.css'
import CatIcon from '../../assets/cat.svg'

export default function FormularioCadastro(){
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [idade, setIdade] = useState('')
  const nomeRef = useRef(null)

  useEffect(() => {
    // foco ao montar
    if(nomeRef.current) nomeRef.current.focus()
  }, [])

  function limparCampos(){
    setNome('')
    setEmail('')
    setIdade('')
    if(nomeRef.current) nomeRef.current.focus()
  }

  function handleSubmit(e){
    e.preventDefault()
    if(!nome.trim() || !email.trim() || !idade.trim()){
      alert('Por favor, complete todos os campos antes de enviar.')
      return
    }
    alert(`Dados enviados:\nNome: ${nome}\nEmail: ${email}\nIdade: ${idade}`)
    limparCampos()
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.brand}>
        <img src={CatIcon} alt="gato" />
        <h3>Cadastro do adotante</h3>
      </div>

      <label className={styles.field}>
        <span>Nome</span>
        <input
          ref={nomeRef}
          value={nome}
          onChange={e => setNome(e.target.value)}
          placeholder="Seu nome completo"
        />
      </label>

      <label className={styles.field}>
        <span>Email</span>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="seu@email.com"
        />
      </label>

      <label className={styles.field}>
        <span>Idade</span>
        <input
          value={idade}
          onChange={e => setIdade(e.target.value)}
          placeholder="Ex: 28"
        />
      </label>

      <div className={styles.actions}>
        <button type="submit" className={styles.btn}>Enviar</button>
        <button type="button" className={styles.clear} onClick={limparCampos}>Limpar</button>
      </div>
    </form>
  )
}
