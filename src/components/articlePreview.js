import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StyledArticles } from "./styles/Articles.styled"

// const ArticlePreview = ({ title, path, image, alt, summary }) => (
const ArticlePreview = ({ count, title, path, summary, image, alt }) => (
  <StyledArticles layout={count % 2 === 0 && "row"}>
    
      <Link to={path}>
        <h2>{title}</h2>
      </Link>
      <picture dangerouslySetInnerHTML={{ __html: summary }} />
    <br />
    
      <img src={image} alt={alt} />
    
  </StyledArticles>
)

 ArticlePreview.propTypes = {
   title: PropTypes.string.isRequired,
   path: PropTypes.string.isRequired,
  //  key: PropTypes.number.isRequired,
   alt: PropTypes.string.isRequired,
   summary: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
 }

export default ArticlePreview
