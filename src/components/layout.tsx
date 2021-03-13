import React,{ReactNode} from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../assets/style/layout.css"

interface Props{
  children:ReactNode
}

const Layout = ({ children }:Props) => {
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
    <>
      <div className="layout">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
