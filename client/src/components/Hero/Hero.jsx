import React from "react";
import {
  HeroLeft,
  HeroStyles,
  HeroTitle,
  HeroText,
  WhiteButton,
} from "./HeroStyles";
import {
  SectionStyles,
  SectionText,
  SectionTitle,
  SectionLeft,
  Button,
} from "../../styles/GlobalComponents";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <SectionStyles id="home" style={{ marginTop: 60 }}>
      <SectionLeft>
        <SectionTitle>
          Mobile and Web <br />
          Fullstack Developer
        </SectionTitle>
        <HeroText>
          My purpose is to develop the most efficient applications and websites
          according to the client needs and help aspiring developers take their
          skills to another level
        </HeroText>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Button>
            <Link
              to="contact"
              smooth={true}
              hashSpy={true}
              // offset={50}
              duration={500}
              delay={200}
              isDynamic={true}
            >
              Contact
            </Link>
          </Button>
          <WhiteButton>Resume</WhiteButton>
        </div>
      </SectionLeft>
    </SectionStyles>
  );
};

export default Hero;
