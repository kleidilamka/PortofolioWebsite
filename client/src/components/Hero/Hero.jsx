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
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <HeroText>
          The purpose of JavaScript Mastery is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
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
