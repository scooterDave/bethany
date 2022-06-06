/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
//  import "./layout.css"
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from 'twin.macro'
import { Container } from './styles/Container.styled.js'

const theme = {
  colors: {
    header: "#ccc",
    body: "#fff",
  },
  mobile: "768px",
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        {/* <div
          style={{
            margin: `0 auto`,
            width: `100vw`,
            height: `100vh`,
            padding: `0`,
          }}
        > */}
          <Container>
            <main>{children}</main>
          </Container>
          <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        {/* </div> */}
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
