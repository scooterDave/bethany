import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"


const BulletinTemplate = ({ data }) => {
  const bulletin = data.allNodeBulletin.nodes[0]
  let bulletin_component = (
        <Layout>
          <h1>{bulletin.title}</h1>
          <p>
            <a
              href={
                bulletin.relationships.field_bulletin[0].localFile.publicURL
              }
            >
              {bulletin.relationships.field_bulletin[0].filename}
            </a>
          </p>
        </Layout>
  )
  return bulletin_component
}


export default BulletinTemplate
export const query = graphql`
  query ($BulletinId: String!, $skip: Int!, $limit: Int!) {
    allNodeBulletin(
      filter: { id: { eq: $BulletinId } }
      sort: { fields: created, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        title
        path {
          alias
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
  }
`
