import * as React from "react"
// import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StyledHeader } from "./styles/Header.styled"
import tw from "twin.macro"

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div>
      <h1>
        <Link to="/" css={tw`text-2xl text-fuchsia-50`}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </StyledHeader>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: `test BPC`,
// }

export default Header
