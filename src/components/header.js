import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StyledHeader } from "./styles/Header.styled"

const Header = ({ siteTitle }) => (
  <StyledHeader>
      <div>
        <h1>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
