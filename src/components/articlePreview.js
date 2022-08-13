import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StyledArticles } from "./styles/Articles.styled"

const ArticlePreview = ({ count, title, path, summary, image, alt }) => (
  <StyledArticles layout={count % 2 === 0 && "row"}>
    <div>
      <Link to={path}>
        <h2>{title}</h2>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: summary }} />
    </div>
    <div>
      <img src={image} alt={alt} />
    </div>
  </StyledArticles>
)

 ArticlePreview.propTypes = {
   title: PropTypes.string.isRequired,
   path: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   key: PropTypes.number.isRequired,
   alt: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired,
 }

export default ArticlePreview
