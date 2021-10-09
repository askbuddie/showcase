import * as React from 'react';
import { Projects } from '../templates/Projects';


const heroStyle = {
  height: "100vh",
  width:"100%",
  fontFamily:"Raleway",
  fontSize:"50px",
  fontWeight:"700",
  color:"#2D2D2D",
}
const textBlack={
  color:"#2D2D2D",
}
// markup
const IndexPage = () => {
  return (
    <main className="container mx-auto" >
      <div className="container flex mx-auto px-6 justify-items-center items-center text-center" style={heroStyle}>
        <div className="container mx-auto md:px-8 flex flex-col justify-items-center items-center">
          Awesome Collection of projects
          <div> from
            <span class="my-2 font-extrabold" style={{color:"#E53935"}}> Buddies </span>
          </div>
          <div className="mx-auto font-normal text-base md:px-8 md:w-3/4 md:my-4 sm-extraspace">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </div>
          <div className="bg-red-100 md:w-1/2 md:p-2 text-lg rounded-full flex items-center sm-extraspace">
            <div className="px-2 w-15px h-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input type="text" className="bg-red-100 p-2 border-none focus:outline-none md:w-full sm-80" placeholder="Search the project" style={{textBlack}}></input>
          </div>
        </div>
      </div>
      <Projects />
    </main>
  );
};
export default IndexPage;
