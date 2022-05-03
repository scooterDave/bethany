import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import { Parallax, ParallaxProvider } from "react-scroll-parallax"


const BulletinTemplate = ({ data }) => {
  const bulletin = data.allNodeBulletin.nodes[0]
  let bulletin_component = (
    <ParallaxProvider>
      <Parallax speed={-10}>
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
      </Parallax>
    </ParallaxProvider>
  )
  return bulletin_component
}


export default BulletinTemplate
export const query = graphql`
  query ($BulletinId: String!) {
    allNodeBulletin(filter: { id: { eq: $BulletinId } }) {
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
