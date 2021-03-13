import { GatsbyImage,getImage } from "gatsby-plugin-image"
import React from "react"
import Link from "./link"
interface ProjectInterface {
    title: string
    thumbnail: any
    using: Array<string>
    url?: string
    repo?: string
    html: string
}

const ProjectCard = ({
    html,
    title,
    thumbnail,
    using,
    url,
    repo,
  }: ProjectInterface) => {
    let img = thumbnail ? getImage(thumbnail.childImageSharp) : undefined
  
    return (
      <div className="project">
        <div className="thumbnail">{img && <GatsbyImage alt={title+"\n"+html} image={img} />}</div>
        <p className="title">{title}</p>
        <div className="project_info">
          {html && (
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          )}
  
          <ul>
            {using.map(s => {
              return <li>{s}</li>
            })}
          </ul>
        </div>
  
        <div className="links">
          {url && (
            <Link url={url}>CODE</Link>

          )}
          {repo && (
            <Link url={repo}>CODE</Link>
          )}
        </div>
      </div>
    )
  }
  
  export default ProjectCard
  