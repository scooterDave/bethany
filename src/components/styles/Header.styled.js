// import { formatFromFilename } from "gatsby-plugin-image/dist/src/image-utils";
import styled from "styled-components";
import tw from "twin.macro"


export const StyledHeader = styled.header`
  /* background-color: ${({ theme }) => theme.colors.header}; */

  grid-area: head;
  margin-bottom: 1.45rem;
  background-color: ${tw`h-24 bg-gradient-to-b from-gray-500 to-pink-200`};
  div {
    margin: 0 auto;
    max-width: 960;
    padding: ${tw`px-6`};
  }
  h1 {
    margin: ${tw`m-0`};
  }
`