// import { formatFromFilename } from "gatsby-plugin-image/dist/src/image-utils";
import styled from "styled-components";



export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.colors.header};
    margin-bottom: 1.45rem;
      
    div {
        margin: 0 auto;
          max-width: 960;
          padding: 1.45rem 1.0875rem;
    }
    h1 {
        margin: 0;
    }
`