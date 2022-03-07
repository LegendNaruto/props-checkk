import React from 'react'
import { Table } from 'react-bootstrap'
import ProductCard from './ProductCard'

const ProductList = ({list}) => {
  return (
    <div>
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>info</th>
      <th> Name Product </th>
      <th>Product Pic</th>
      <th>Product Price</th>
    </tr>
  </thead>
  <tbody>
   
   {
       React.Children.toArray(list.map(item=><ProductCard data={item}/>))
   }
 
  </tbody>
</Table>
    </div>
  )
}

export default ProductList