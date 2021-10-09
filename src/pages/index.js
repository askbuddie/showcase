import * as React from 'react';
import { Projects } from '../templates/Projects';

// markup
const IndexPage = () => {
  return (
    <main className="container mx-auto">
      <h1>Awesome Collection of projects from Buddies </h1>
      <Projects />
    </main>
  );
};

export default IndexPage;
