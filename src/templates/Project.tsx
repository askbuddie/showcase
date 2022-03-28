import React from 'react';
import { IProjects } from '../types/ITemplates/IProjects';

export const Project = (props: IProjects.IProjects_Data) => {
  const { title, excerpt, featuredImg } = props.node.frontmatter;
  return (
    <li className="my-2 px-2 w-full overflow-hidden md:w-1/4 lg:w-1/4 xl:w-1/4" key={props.node.id}>
      <a href="">
        <div className="mx-2 flex-wrap">
          <div className="bg-red-50 w-70 rounded flex justify-center">
            <img className="object-contain w-60 h-60 rounded my-4" src={featuredImg?.publicURL} alt={title} />
          </div>
          <h2 className="my-2 text-black font-semibold">{title}</h2>
          <div className="">
            <p>{excerpt}</p>
          </div>
        </div>
      </a>
    </li>
  );
};
