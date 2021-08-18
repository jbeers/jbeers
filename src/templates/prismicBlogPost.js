import React from 'react';
import { graphql } from "gatsby";
import Layout from '../layouts/pageLayout';
import Image from 'gatsby-image';

import style from './blogPost.module.css';

function BlogHeader({ slice  }){
    return <h2>
        { slice.primary.text.text }
    </h2>
}

function BlogImage({ slice }){
    return <img src = { slice.primary.image.url } />
}

function BlogContent({ slice }){
    return <div
        dangerouslySetInnerHTML = {{ __html: slice.primary.content.html }}
    />
}


export default ( { title, data } ) => {
    const { prismicPost } = data;
    return <Layout>
        <div className = { style.content }>
          <h1 className={style.title}>
            {prismicPost.data.title.text}
            <span className = { style.date }>{prismicPost.data.publish_date}</span>
          </h1>
          <img className = { style.image } src = { prismicPost.data.main_image.url } />
            {
                prismicPost.data.body.map( slice => {
                    let SliceRenderer = null;

                    switch( slice.slice_type ){
                        case 'section_heading': SliceRenderer = BlogHeader; break;
                        case 'content': SliceRenderer = BlogContent; break;
                        case 'image': SliceRenderer = BlogImage; break;
                    }

                    return <SliceRenderer slice = { slice } />
                } )
            }
        </div>
    </Layout>
}

export const pageQuery = graphql`
    query MyQuery($id: String) {
  prismicPost(id: { eq: $id }) {
    data {
        publish_date
        main_image {
            url
        }
      title {
        text
        html
      }
      body {
        ... on PrismicPostDataBodyContent {
          id
          slice_label
          slice_type
          primary {
            content {
              html
            }
          }
        }
        ... on PrismicPostDataBodyImage {
          id
          primary {
            image {
              url
            }
          }
          slice_label
          slice_type
        }
        ... on PrismicPostDataBodySectionHeading {
          id
          slice_label
          slice_type
          primary {
            text {
              text
            }
          }
        }
      }
    }
  }
}
`