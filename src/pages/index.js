import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import tw from 'twin.macro'

// import styled from "styled-components"

// const theme = {
//   colors: {
//     header: "#ebfbff",
//     body: "#fff",
//   },
//   mobile: "768px",
// }

const IndexPage = () => (
  <Layout>
    <div css={tw`relative w-full max-w-lg bg-green-100`}>
      <div
        css={tw`absolute top-10 -left-4 w-72 h-72 bg-blue-400 filter blur-xl opacity-50 rounded-full animate-pulse`}
      ></div>
      <div
        css={tw`absolute top-8 -right-5 w-72 h-72 bg-yellow-300 filter blur-xl opacity-50 mix-blend-multiply rounded-full animate-pulse`}
      ></div>
      <div
        css={tw`absolute -bottom-96 left-20 w-72 h-72 bg-pink-300 filter blur-xl opacity-50 mix-blend-multiply rounded-full animate-pulse`}
      ></div>
    </div>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
    <p>
      <Link to="/articles/">Go to articles page</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
