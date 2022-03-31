import { graphql } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
// import parse from 'html-react-parser'
// import reactHtmlParser from "react-html-parser"
import ReactHtmlParser from "react-html-parser"

const Article = ({ data }) => {
  const post = data.nodeArticle
  
  return (
    <Layout>
      {/* console.log(post) */}
      <h1>{post.title}</h1>
      {/* <div dangerouslySetInnerHTML={{ __html: post.body.processed }} */}
      {data.allImageSharp.nodes.map(image => (
        <GatsbyImage image={image.gatsbyImageData} alt={``} />
      ))}
      <div>{ReactHtmlParser(post.body.processed)}</div>
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Article

export const query = graphql`
  query ($ArticleId: String!) {
    nodeArticle(id: { eq: $ArticleId }) {
      title
      id
      path {
        alias
      }
      body {
        processed
      }
    }
    allImageSharp {
      nodes {
        id
        gatsbyImageData(layout: CONSTRAINED, width: 200)
      }
    }
  }
`
