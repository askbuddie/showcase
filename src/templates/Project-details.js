import { graphql } from 'gatsby';
import React from 'react';
import { details, featured } from '../styles/project-details.module.css';

export default function ProjectDetails({ data }) {
  const { title, excerpt, featuredImg } = data.mdx.frontmatter;
  return (
    //TODO - show project link & content
    <div className={details}>
      <h1>{title}</h1>
      <h3>{excerpt}</h3>
      <div className={featured}>
        <img src={featuredImg.publicURL} />
      </div>
    </div>
  );
}

export const query = graphql`
  query ProjectDetail($slug: String) {
    mdx(slug: { eq: $slug }) {
      frontmatter {
        excerpt
        title
        featuredImg {
          publicURL
        }
      }
    }
  }
`;
