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
          data.allPrismicPost.nodes.map( ( node ) => (
            <BlogCard
              key = { node.data.title.text }
              title={node.data.title.text}
              date={node.data.publish_date}
              pagePath={node.data.title.text.replace( /\W/g, '_' ).toLowerCase()}
              imageSrc={ node.data.main_image.url || 'https://picsum.photos/300/300'}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allPrismicPost(sort: {fields: data___publish_date, order: DESC}, limit: 3) {
    nodes {
      data {
        title {
          text
        }
        publish_date
        main_image {
          url
        }
      }
    }
  }
  }
`
