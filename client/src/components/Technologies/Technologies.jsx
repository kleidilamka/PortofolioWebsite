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
          Frontend experience with multiple tools most mentioned React and React
          Native Frontend experience with multiple tools most mentioned React
          and React Native Frontend experience with multiple tools most
          mentioned React and React Native Frontend experience with multiple
          tools most mentioned React and React Native
        </ItemDescription>
      </Item>
      <Item>
        <SiAwsamplify size={26} color={"orange"} />
        <FaNodeJs size={30} color={"#215732	"} />

        <ItemTitle>Backend</ItemTitle>
        <ItemDescription>
          Frontend experience with multiple tools most mentioned React and React
          Native Frontend experience with multiple tools most mentioned React
          and React Native Frontend experience with multiple tools most
          mentioned React and React Native Frontend experience with multiple
          tools most mentioned React and React Native
        </ItemDescription>
      </Item>
      <Item>
        <DiReact size={30} color={"#0E6195"} />
        <ItemTitle>Mobile Development</ItemTitle>
        <ItemDescription>
          Frontend experience with multiple tools most mentioned React and React
          Native Frontend experience with multiple tools most mentioned React
          and React Native Frontend experience with multiple tools most
          mentioned React and React Native Frontend experience with multiple
          tools most mentioned React and React Native
        </ItemDescription>
      </Item>
    </ItemContainer>
  </SectionStyles>
);

export default Technologies;
