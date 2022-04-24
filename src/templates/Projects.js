import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
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

  console.log(projects);

  return (
    <div className="grid grid-cols-3 gap-4">
      {projects?.map((project) => (
        <Link to={'/projects/' + project.node.slug} key={project.node.id}>
          <Project {...project} />
        </Link>
      ))}
    </div>
  );
};
