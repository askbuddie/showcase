import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export const Projects = () => {
  const allProjects = useStaticQuery(graphql`
    query allProjects {
      allMdx {
        edges {
          node {
            id
            slug
            frontmatter {
              title
              tags
              featuredImg
              excerpt
            }
          }
        }
      }
    }
  `)

  const projects = allProjects.allMdx.edges

  return (
    <div>
      <ul>
        {projects.map(
          ({
            node: {
              frontmatter: { title, excerpt },
            },
          }) => (
            <li>
              <strong> Title: {title} </strong>
              <p>{excerpt}</p>
            </li>
          )
        )}
      </ul>
    </div>
  )
}
