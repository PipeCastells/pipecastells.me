import React,{ReactNode} from "react"
import { useStaticQuery, graphql } from "gatsby"


interface Props{
  url:string;
  children:ReactNode
}

const Link = ({ children,url }:Props) => {
  let title = children;
  if(title && typeof(title) != "string"){
    console.error("A 'Link' can only be provided a 'string' as children. Provided: "+typeof(title)+"'");
    return <></>;
  }
  title = title?title?.toString().toUpperCase():"";
  return (
    <a href={url} target="_blank" rel="noopener" >
      <button className="link">{title}</button>
    </a>
  )
}

export default Link
