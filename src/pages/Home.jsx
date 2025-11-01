import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home(){
  return (
    <div className={styles.home}>
      <h2>Bem-vinda(o) ao portal de Adoção</h2>
      <p>Cadastre-se para adotar um gatinho. Seu carinho muda uma vida!</p>
      <Link to="/cadastro" className={styles.cta}>Ir para cadastro</Link>
    </div>
  )
}
