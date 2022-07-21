import styled from "styled-components"
import tw from "twin.macro"

// export const StyledCard = styled.div`
//   display: flex;
//   align-items: center;
//   background-color: ${({ bg }) => bg};
//   border-radius: 15px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
//   margin: 40px;
//   padding: 60px;
// `
export const StyledArticles = styled.article`
  display: flex;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  &:nth-child(even) {
    ${tw`bg-red-300`}
  }
  ${tw`bg-blue-300  space-y-8 `}
  flex-direction: ${({ layout }) => layout || "row-reverse"};

  &img {
    ${tw`object-cover min-w-full  md:h-auto mx-auto rounded-br-xl rounded-bl-xl md:rounded-none `}
  }
  & > div {
    ${tw`flex-1 flex-col flex-wrap`}
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
