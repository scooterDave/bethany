import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ArticlePreview from "../components/articlePreview"
import { StyledArticles } from "../components/styles/Articles.styled"
const Articles = ({ data }) => {
  const articles = data.allNodeArticle.edges

  return (
    <Layout>
      <SEO title="Articles" />
      <h1>Articles</h1>
      {articles.map(article => (
        <StyledArticles bg='red'>
          <ArticlePreview
            key={article.node.id}
            title={article.node.title}
            path={article.node.path.alias}
            summary={
              article.node.body.summary
                ? article.node.body.summary
                : article.node.body.processed.substring(0, 300)
            }
          />
        </StyledArticles>
      ))}
    </Layout>
  )
}

Articles.propTypes = {
  data: PropTypes.object.isRequired,
}

export const data = graphql`
  {
    allNodeArticle(sort: { fields: created, order: DESC }, limit: 10) {
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
  }
`

export default Articles
