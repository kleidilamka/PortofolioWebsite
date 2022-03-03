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
  AboutTitle,
  TextContainer,
} from "./AboutStyles";
import ProfilePic from "../../assets/jari.jpeg";
import { MdMailOutline } from "react-icons/md";
import { ImGithub, ImLinkedin } from "react-icons/im";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <SectionStyles id="about">
      <AboutStyles>
        <LeftContainer>
          <AboutImg src={ProfilePic} />
          <IconsContainer>
            <a class="mailto" href="mailto:kleidilamka@gmail.com">
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
              href="https://www.linkedin.com/in/kleidi-lamka-335979174/"
              target="_blank"
              rel="noreferrer"
            >
              <ImLinkedin size={30} color={"white"} />
            </a>
          </IconsContainer>
        </LeftContainer>
        <RightContainer>
          <TextContainer>
            <AboutTitle>Hello, </AboutTitle>
            <AboutTitle>
              <Typewriter
                options={{
                  skipAddStyles: true,
                  strings: ["I am Kleidi Lamka"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </AboutTitle>
          </TextContainer>
          <SectionText>
            I am a fullstack developer with 1 year and a half experience
            developing a variety of web and mobile applications. My passion for
            programming helped develop a diverse set of skills on frontend
            ranging from HTML, CSS3 to Javascript and multiple Javascript
            frameworks like React and React Native for mobile apps. I have also
            done my share of works in backend development. The most notable
            technologies i have used are NodeJS with Express and AWS Amplify. I
            specialize in creating and bringing clients the most rich with
            features app and an industry standard performance
          </SectionText>
        </RightContainer>
      </AboutStyles>
    </SectionStyles>
  );
};

export default About;
