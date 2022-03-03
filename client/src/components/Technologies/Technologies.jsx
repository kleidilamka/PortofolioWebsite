import React from "react";
import {
  DiFirebase,
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import { SiAwsamplify, SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import {
  SectionStyles,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  ItemContainer,
  Item,
  ItemTitle,
  ItemDescription,
  List,
} from "./TechnologiesStyles";

const Technologies = () => (
  <SectionStyles id="technologies">
    <SectionTitle>Technologies</SectionTitle>
    <ItemContainer>
      <Item>
        <DiHtml5 size={30} color={"#f06529"} />
        <DiCss3 size={30} color={"#2965f1"} />
        <DiJavascript1 size={30} color={"yellow"} />
        <DiReact size={30} color={"#61d8fb"} />
        <ItemTitle>Frontend</ItemTitle>
        <ItemDescription>
          Frontend experience with HTML, CSS and Javascript and Javascript
          frameworks like React and Vue. With frontend being the main field of
          expertise, i have experience developing multiple websites for
          businesses with easy navigation for customers
        </ItemDescription>
      </Item>
      <Item>
        <SiAwsamplify size={26} color={"orange"} />
        <FaNodeJs size={30} color={"#215732	"} />

        <ItemTitle>Backend</ItemTitle>
        <ItemDescription>
          Backend is one of my favorite fields of software development. I try to
          bring to life scalable applications and use the newest technologies
          for businesses to get realtime data without delay. My favorite
          technologies are Express with NodeJS and AWS Amplify
        </ItemDescription>
      </Item>
      <Item>
        <DiReact size={30} color={"#0E6195"} />
        <ItemTitle>Mobile Development</ItemTitle>
        <ItemDescription>
          Mobile development is the main path in my career. I have built
          multiple apps with Javascript and React Native in a professional
          environment. Always careful to implement pixel perfect of designs and
          create performant applications by following the best practices to make
          the user experience the best possible.
        </ItemDescription>
      </Item>
    </ItemContainer>
  </SectionStyles>
);

export default Technologies;
