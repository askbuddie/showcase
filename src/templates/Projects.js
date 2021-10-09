import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Project } from './Project';

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
              featuredImg {
                publicURL
              }
              excerpt
            }
          }
        }
      }
    }
  `);

  const projects = allProjects.allMdx.edges;

  return (
    <div>
      <ul className="flex flex-wrap overflow-hidden">
        {projects?.map((project) => (
          <Project {...project} />
        ))}
      </ul>
    </div>
  );
};
