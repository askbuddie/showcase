import React from 'react';

export const Project = (props) => {
  const { title, excerpt, featuredImg } = props.node.frontmatter;
  return (
    <div className="mx-2 flex-wrap">
      <div className="bg-red-50 w-70 rounded flex justify-center">
        <img class="object-contain w-60 h-60 rounded my-4" src={featuredImg?.publicURL} alt={title} />
      </div>
      <h2 className="my-2 text-black font-semibold">{title}</h2>
      <div className="">
        <p>{excerpt}</p>
      </div>
    </div>
  );
};
