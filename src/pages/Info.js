import React from 'react'
import { useParams } from 'react-router-dom'
const Info = () => {
    const {id} = useParams()

  return (
    <div>
        <h1>Mais informaçoes sobree oo produto: {id}</h1>
    </div>
  )
}

export default Info