import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from '../components/Home/info'
import Menu from '../components/Home/Menu'
import Products from '../components/Home/Products'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <BackgroundSection
      img ={data.image.childImageSharp.fluid}
      title="regular joe's"
      styleClass='default-background'
    />
    <Info/>
    <Menu items={data.menu}/>
    <Products/>
  </Layout>
)

export const query = graphql`
  {
  image: file(relativePath:{eq: "default-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulCoffeeItem{
    edges{
      node{
        id
        title
        price
        category
        image{
          fixed(width: 50, height: 50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
        description{
          description
        }
      }
    }
  }
}
`

export default IndexPage
