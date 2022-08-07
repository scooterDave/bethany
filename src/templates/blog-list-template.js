import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"


class BlogList extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allNodeBulletin.nodes
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* {posts.map(({ data }) => {
        //   const title = {title}
          
          return (
            // <div key={path.pid}>
            <div>
              {title}
              <h3>
                <Link style={{ boxShadow: "none" }} to={data.title}>
                  {title}
                </Link>
              </h3>
            </div>
          )
        })} */}
        {/* <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            listStyle: "none",
            padding: 0,
          }}
        >
          {!isFirst && (
            <Link to={prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {Array.from({ length: numPages }, (_, i) => (
            <li
              key={`pagination-number${i + 1}`}
              style={{
                margin: 0,
              }}
            >
              <Link
                to={`/${i === 0 ? "" : i + 1}`}
                style={{
                  textDecoration: "none",
                  color: i + 1 === currentPage ? "#ffffff" : "",
                  background: i + 1 === currentPage ? "#007acc" : "",
                }}
              >
                {i + 1}
              </Link>
            </li>
          ))}
          {!isLast && (
            <Link to={nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </ul> */}
      </Layout>
    )
  }
}

export default BlogList

// export const blogListQuery = graphql`
export const pageQuery = graphql`
  #   query blogListQuery($skip: Int!, $limit: Int!) {
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allNodeBulletin(
      sort: { fields: created, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        title
        path {
          alias
          pid
        }
        relationships {
          field_bulletin {
            filename
            localFile {
              publicURL
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
