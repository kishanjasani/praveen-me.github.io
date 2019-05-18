import React from "react"
import { Link } from "gatsby"
import { graphql} from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

const About = ( { data } ) => {
  const about = data.allMarkdownRemark.edges.filter(edge => edge.node.frontmatter.title === 'About');
  
  const minutes = Math.ceil( about[0].node.wordCount.words / 200 ) 

  return (
    <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`, `portfolio`, `personal website`, `blog`]}/>

      {/* About Page */}
      <div className="about sml-wrapper">
        <div className="about__sec">
          <div className="about__head-sec">
            <h2 className="about__head">
              About Me
            </h2>
            <p className="about__time"> { minutes } { minutes > 1 ? 'minutes' : 'minute'  }  read </p>
          </div>
          <img src={ data.imageOne.childImageSharp.fluid.src } alt="" className="about__author-img"/>
        </div>
        <p className="about__content">
        
        </p>
      </div>    
      <Link to="/">Home</Link>
    </Layout>
  )
}

export const query = graphql`
  query {
    imageOne: file(relativePath: {eq: "me.jpg"}) {
      childImageSharp {
        fluid {
          src
          originalImg
          originalName
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          html
          wordCount {
            words
          }
          frontmatter{
            title
          }
        }
      }
    }
  }
`

export default About;
