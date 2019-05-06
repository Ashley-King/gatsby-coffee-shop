import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from '../components/Home/info'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <BackgroundSection
      img ={data.image.childImageSharp.fluid}
      title="about us"
      styleClass='default-background'
    />
    <Info/>
  </Layout>
)

export const query = graphql`
  {
  image: file(relativePath:{eq: "about-background.jpeg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`

export default AboutPage;
