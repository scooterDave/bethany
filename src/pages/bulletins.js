import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BulletinPreview from "../components/bulletinPreview"

const Bulletins = ({ data }) => {
  const bulletins = data.allNodeBulletin.edges
  
  return (
    <Layout>
      <Seo title="Bulletins" />
      <h1>Bulletins</h1>
      {bulletins.map(bulletin => (
          <BulletinPreview
            description={bulletin?.node.field_bulletin[0].description}
            key={bulletin?.node.field_bulletin[0].drupal_internal__target_id}
            title={bulletin.node.title}
            path={bulletin.node.path.alias}
          />
        ))}
    </Layout>
  )
}

Bulletins.propTypes = {
  data: PropTypes.object.isRequired,
}

export const data = graphql`
  {
    allNodeBulletin(sort: { fields: created, order: DESC }, limit: 10) {
      edges {
        node {
          field_bulletin {
            description
            drupal_internal__target_id
          }
          title
          path {
            alias
          }
        }
      }
    }
  }
`

export default Bulletins
