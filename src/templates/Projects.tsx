import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Project } from './Project';
import { IProjects } from '../types/ITemplates/IProjects';

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

  const projects: IProjects.IProjects_Data[] = allProjects.allMdx.edges;

  return (
    <div>
      <ul className="flex flex-wrap overflow-hidden">
        {projects?.map((project: IProjects.IProjects_Data) => (
          <Project {...project} />
        ))}
      </ul>
    </div>
  );
};
