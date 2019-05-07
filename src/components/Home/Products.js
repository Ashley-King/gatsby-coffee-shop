import React, { Component } from 'react'
import Title from '../Globals/Title'
import {StaticQuery, graphql} from 'gatsby'
import Product from'./Product'

const getProducts = graphql`{
 products:allContentfulCoffeeProduct{
   edges{
     node{
       id
       title
       price
       image{
        fluid(maxHeight: 426){
           ...GatsbyContentfulFluid_tracedSVG
         }
       }
     }
   }
 }
}
`
export default class Products extends Component {
  render() {
    return (
      <StaticQuery
      
       query={ getProducts}

       render={data =>{
        console.log(data)
        return (
         <section className='py-5'>
          <div className="container">
           <Title title='our products'/>
           <div className="row">
            {data.products.edges.map(({node:product})=> { return(
             <Product
              key={product.id}
              product={product}
             />
            )

            })}
           </div>
          </div>
         
         </section>

        )

       }}
      />
    )
  }
}
