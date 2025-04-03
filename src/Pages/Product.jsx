import React from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const {productId} = useParams();
    console.log(productId);

  return (
    <div>This is Product</div>
  )
}

export default Product