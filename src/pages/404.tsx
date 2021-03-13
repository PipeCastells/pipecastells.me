import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo"

const nfp_style = {
  content: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: 'Roboto Mono, Arial',
    whiteSpace: 'nowrap' as any | undefined,
    width: 'auto !important'
  },
  container: {
    display: 'flex',
    flexDirection: `column` as any | undefined,
    justifyContent: 'center',
    textDecoration: 'none'
  }
}
const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <div style={nfp_style.container}>
      <h2 style={nfp_style.content}>404</h2>
      <Link to="/" style={nfp_style.content}><button className="link" style={nfp_style.content}>Back to Home</button></Link>
    </div>
  </Layout>
)

export default NotFoundPage
