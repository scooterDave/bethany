import { graphql } from "gatsby"
import React from "react"
// import PropTypes from "prop-types"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image"
// import parse from 'html-react-parser'
// import reactHtmlParser from "react-html-parser"
import ReactHtmlParser from "react-html-parser"

const ArticleTemplate = ({ data }) => {
  const article = data.allNodeArticle.edges[0].node

  //  let image = (<React.Fragment/>);

  let article_body_elements = new ReactHtmlParser(article.body.processed, {
    transform: function transform(node) {
      if (node.type === "tag" && node.name === "img") {
        let uuid = node.attribs["data-entity-uuid"]
        let alt = node.attribs["alt"]
        let cName = node.attribs["class"]
        let key = article.id
        let i = 0

        for (i = 0; i < data.allFileFile.edges.length; i++) {
          // const image = getImage(
          //   data.allFileFile.edges[i].node.localFile.childImageSharp
          //     .gatsbyImageData
          // )
          if (
            data.allFileFile.edges[i].node.drupal_id === uuid &&
            data.allFileFile.edges[i].node.localFile
          ) {
            return (
              <GatsbyImage
                key={key}
                image={
                  data.allFileFile.edges[i].node.localFile.childImageSharp.gatsbyImageData
                }
                alt={alt}
                className={cName}
              />
            )
          }
        }
      }
      return undefined
    }
  })
  let article_component = (
    <Layout>
      <h1>{article.title}</h1>
      {/* {image} */}
      {article_body_elements}
    </Layout>
  )
  return article_component
  // return (
  //   <Layout>
  //     {/* console.log(post) */}
  //     <h1>{post.title}</h1>
  //     <div>{article_body_elements}</div>
  //     {/* <div dangerouslySetInnerHTML={{ __html: post.body.processed }} */}
  //     {/* {data.allImageSharp.nodes.map(image => (
  //       <GatsbyImage image={image.gatsbyImageData} alt={``} />
  //     ))} */}
  //     {/* <div>{ReactHtmlParser(post.body.processed)}</div> */}
  //   </Layout>
  // )
}

// article.propTypes = {
//   data: PropTypes.object.isRequired,
// }

export default ArticleTemplate

export const query = graphql`
  query ($ArticleId: String!) {
    allNodeArticle(filter: { id: { eq: $ArticleId } }) {
      edges {
        node {
          id
          title
          path {
            alias
          }
          body {
            processed
          }
        }
      }
    }
    allFileFile {
      edges {
        node {
          id
          drupal_id
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, width: 200)
            }
          }
        }
      }
    }
  }
`
