import React from "react";
import { SectionStyles, SectionTitle } from "../../styles/GlobalComponents";
import SlickCarousel from "../SlickCarousel";

const Projects = () => {
  return (
    <SectionStyles id="projects">
      <SectionTitle>Projects</SectionTitle>
      <SlickCarousel />
    </SectionStyles>
  );
};

export default Projects;
