import React from 'react';
import { graphql } from "gatsby";
import Layout from '../layouts/pageLayout';

import style from './blogPost.module.css';

export default ( { title, data } ) => {
    const { markdownRemark: post } = data
    return <Layout>
        <div className = { style.content }>
          <h1 className={style.title}>{post.frontmatter.title}</h1>
          <img className = { style.image } src={post.frontmatter.image} alt={post.frontmatter.imageAlt || post.frontmatter.title}></img>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
    </Layout>
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { pagePath: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        pagePath
        title
        image
      }
    }
  }
`