import {
  SectionStyles,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  AboutImg,
  LeftContainer,
  AboutStyles,
  RightContainer,
  IconsContainer,
} from "./AboutStyles";
import ProfilePic from "../../assets/jari.jpeg";
import { MdMailOutline } from "react-icons/md";
import { ImGithub, ImLinkedin } from "react-icons/im";

const About = () => {
  return (
    <SectionStyles id="about">
      <AboutStyles>
        <LeftContainer>
          <AboutImg src={ProfilePic} />
          <IconsContainer>
            <a
              href="https://github.com/kleidilamka"
              target="_blank"
              rel="noreferrer"
            >
              <MdMailOutline size={30} color={"white"} />
            </a>
            <a
              href="https://github.com/kleidilamka"
              target="_blank"
              rel="noreferrer"
            >
              <ImGithub style={{ margin: 20 }} size={30} color={"white"} />
            </a>
            <a
              href="https://github.com/kleidilamka"
              target="_blank"
              rel="noreferrer"
            >
              <ImLinkedin size={30} color={"white"} />
            </a>
          </IconsContainer>
        </LeftContainer>
        <RightContainer>
          <SectionTitle>Hello, I am Kleidi Lamka</SectionTitle>
          <SectionText>
            The purpose of JavaScript Mastery is to help aspiring and
            established developers to take their development skills to the next
            level and build awesome apps. The purpose of JavaScript Mastery is
            to help aspiring and established developers to take their
            development skills to the next level and build awesome apps. The
            purpose of JavaScript Mastery is to help aspiring and established
            developers to take their development skills to the next level and
            build awesome apps. The purpose of JavaScript Mastery is to help
            aspiring and established developers to take their development skills
            to the next level and build awesome apps.
          </SectionText>
        </RightContainer>
      </AboutStyles>
    </SectionStyles>
  );
};

export default About;
