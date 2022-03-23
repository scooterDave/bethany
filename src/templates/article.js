import React from "react"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import parse from 'html-react-parser'
import reactHtmlParser from 'react-html-parser';



import Layout from "../components/layout"

const Article = ({ data }) => {
    const post = data.nodeArticle

    return (
      <Layout>
        <h1>{post.title}</h1>
        <p>
          Open a PDF file
          <a href={post.relationships.field_pdf_file.localFile.publicURL}>
            example
          </a>
          .
        </p>
        {/* <div dangerouslySetInnerHTML={{ __html: post.body.processed }} */}
        <div >{ reactHtmlParser(post.body.processed) }</div>
        
      </Layout>
    )

}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
    query($ArticleId: String!) {
        nodeArticle(id: { eq: $ArticleId }) {
            id
      title
      body {
        processed
      }
      
      relationships {
        field_pdf_file {
          localFile {
            publicURL
            childrenImageSharp {
              children {
                ... on File {
                  id
                  name
                  absolutePath
                  url
                  publicURL
                }
              }
            }
            childImageSharp {
              gatsbyImageData
              fixed {
                base64
                tracedSVG
                aspectRatio
                srcWebp
                srcSetWebp
                originalName
              }
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
              }
            }
          }
        }
      }
        }
    }
`
export default Article;