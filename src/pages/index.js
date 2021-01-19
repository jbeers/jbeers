import React from "react"
import SEO from '../components/seo';
import { graphql } from 'gatsby';

import Layout from "../layouts/pageLayout"
import BlogCard from '../components/blogcard';

import style from './index.module.css'

export default ( { data } ) => {
  console.log( data );
  return (
    <Layout>
      <SEO title="Home" />
      <div className={style.content}>
        {
          data.allMarkdownRemark.edges.map( ( { node }) => (
            <BlogCard
              key = { node.frontmatter.title }
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              pagePath={node.frontmatter.pagePath}
              imageSrc={node.frontmatter.image}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: { regex: "/published/" } }
      limit:5
      sort: {order: DESC, fields: [frontmatter___date]}
    ){
      edges {
        node {
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            pagePath
            title
            image {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }

`
