import React from "react";
import { BallCanvas } from "./canvas"
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useState, useEffect } from "react";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {!isMobile && <div className='flex flex-row flex-wrap justify-center gap-10'>
        {
          technologies.map((technology) => (
            <div key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))
        }
      </div>}
    </>
  );
};

export default SectionWrapper(Tech, "");
