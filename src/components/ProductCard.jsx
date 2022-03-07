import React from 'react'

const ProductCard = ({data}) => {
  return (
    <div>
         <tr>
      <td><button>info</button></td>
      <td>{data.name}</td>
      <td><img src={data.imgSrc} alt="prouct pic"  /></td>
      <td>{data.price}</td>
    </tr>
    </div>
  )
}

export default ProductCard