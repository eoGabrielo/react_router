import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Products = () => {
    const {id} = useParams()
    const url = "http://localhost:3000/products/"+id;
    const {data: product, loading, error} = useFetch(url);
    console.log(product);

  return (
    <div>
        <p>ID do produtos: {id}</p>
        {error && <p>{error}</p>}
        {/*Validacao se existe algo em products é obrigatorio, pois se mostra de cara as info do produto ele da erro, usando um ternario, ele verificar se existi algo para mostrar */}
        {product && (
            <div>
                <p>Nome: {product.name}</p>
                <p>Nome: {product.price}</p>
                <Link to={`/products/${product.id}/info`}>Mais informacoes</Link>
            </div>
        )}
    </div>
  )
}

export default Products