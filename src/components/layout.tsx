import React, { ReactNode } from "react"

import Header from "./header"
import "../assets/style/gatsby_layout.css"
import "../assets/style/layout.css"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="layout">
        <Header />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
