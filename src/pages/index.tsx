import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Link from "../components/link"
import Project from "../components/project"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = () => {

  const projectsData = useStaticQuery(graphql`
    query allProjects {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              url
              title
              thumbnail {
                childImageSharp {
                  gatsbyImageData(
                    quality: 75
                    width: 800
                    placeholder: TRACED_SVG
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
              using
              repo
            }
          }
        }
      }
    }
  `).allMarkdownRemark.edges

  let projects = projectsData.map(({ node }: any) => {
    if (!node.frontmatter) {
      return <p>{JSON.stringify(node)}</p>
    }
    return (
      <Project
        key={node.frontmatter.url}
        title={node.frontmatter.title}
        thumbnail={node.frontmatter.thumbnail}
        using={node.frontmatter.using}
        url={node.frontmatter.url}
        repo={node.frontmatter.repo}
        html={node.html}
      />
    )
  });

  return <Layout>
    <SEO title="Felipe Castells" />
    {projects}

  </Layout>
}


export default IndexPage
