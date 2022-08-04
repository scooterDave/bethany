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
      <h1 css={tw`text-2xl text-blue_grotto bg-white`}>Bulletins</h1>
      <ul
        css={tw`grid grid-cols-1 gap-2 content-center`}
      >
        {bulletins.map(bulletin => (
          <BulletinPreview
            description={bulletin?.node.field_bulletin[0].description}
            key={bulletin?.node.field_bulletin[0].drupal_internal__target_id}
            title={bulletin.node.title}
            path={bulletin.node.path.alias}
          />
        ))}
      </ul>
    </Layout>
  )
}

Bulletins.propTypes = {
  data: PropTypes.object.isRequired,
    // title: PropTypes.string.isRequired,
  // path: PropTypes.string.isRequired,
  // key: PropTypes.string.isRequired,
  // alt: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
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
