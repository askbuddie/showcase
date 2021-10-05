<p align="center">
     <a href="https://www.askbuddie.com">
         <img src="src/images/ask-buddie.png" align="center" alt="askbuddie-logo" width="150"/>
     </a>
</p>
<h1 align="center" style="border: 0;"> Showcase </h1>

An awesome collection of projects built by Ask Buddie members.

# Table Of Contents

-   [Prerequisites](#Prerequisites)
-   [Contributing](#Contributing)
-   [License](#license)

# Prerequisites

- JavaScript, Gatsby, Tailwind, React

# Contributing

## Contribute on the project feature

If you are interested to develop & maintain this project please follow the guide below:

To get started, the first step is to pick the (issues)[https://github.com/askbuddie/showcase/issues] and ask for the repository owners to assign it to you.

And,

- Fork this repository
- Create a feature branch
- Make changes as per the requirements ( from issues )
- Create a PR

## Contribute by submitting your project to reach more audience

If you have list of projects that you might want to showcase to our audience, you can submit your project which is also a contribution that you can make, check the guide below:

- Fork this repository
- Create a feature branch
- Add your project information inside `src/content` by creating a file that matches your project name.
- Add your project image ( icon | screenshot or any ) by creating a file inside `src/content/<your-github-username>`.

To add multiple images for multiple projects, create project directory inside `src/images/<your-github-username>/<project-name>/<your-image-file>`
- Read the below important note, update according to it & create a PR

## Important Note on required content:

Anything missing on PR based on what described about will not be accepted.

### `src/content/<your-project-file>.mdx`

Inside the mdx file you have created, it is compulsory to include the information listed below with the proper structure:

```mdx
---
title: Your Project Name
excerpt: Short Description About Your Project
tags: react, gatsby // or any that you used to build your projects. Use comma to separate
featuredImg: '../images/<your-github-username>/<your-project-image>.png' // use jpg, png, svg etc format
projectLink: <link-to-your-project> // live or GitHub repo
---
```

Above content in-between `---` are necessary. Please don't forget to wrap them with `---` 3 hypens before & after the content. It will be used for **frontmatter**.

Don't forget to add your image.

**Note:** Try to add more information below the above content about your project. It can be any information, or demo screenshots, how to setup it, what you learned or anything.

# License

MIT License