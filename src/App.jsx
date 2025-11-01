import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './pages/Cadastro'
import styles from './App.module.css'
import CatIcon from './assets/cat.svg?url'

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img src={CatIcon} alt="gato" className={styles.logo} />
        <h1>Adote um Gato 💚💗</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cadastro">Cadastro</Link>
        </nav>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </main>
    </div>
  )
}
