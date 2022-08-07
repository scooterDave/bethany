import React from "react"
import { graphql } from "gatsby"
// import PropTypes from "prop-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ArticlePreview from "../components/articlePreview"
import Pager from "../components/pager"

const ArticleTemplate = ({ data, pageContext }) => {
  const articles = data.allNodeArticle.edges

  return (
    <Layout>
      <Seo title="All Articles" />
      <h1>All Articles</h1>
      {articles.map(article => (
        <ArticlePreview
          count={article.node.drupal_internal__nid}
          id={article.node.drupal_internal__nid}
          title={article.node.title}
          path={article.node.path.alias}
          summary={
            article.node.body.summary
              ? article.node.body.summary
              : article.node.body.processed.substring(0, 300)
          }
        />
      ))}
      <Pager pageContext={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allNodeArticle(
      sort: {fields: created, order: DESC}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          created
          body{
            processed
            summary
          }
          path {
            alias
          }
          body {
            processed
          }
        }
      }
    }
  }
`
export default ArticleTemplate
