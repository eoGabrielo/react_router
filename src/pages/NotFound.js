import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>404</h1>
        <h2>Pagina não encontrada!!</h2>
        <Link to="/">Voltar</Link>
    </div>
  )
}

export default NotFound