import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
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
} from "./TechnologiesStyles";

const Technologies = () => (
  <SectionStyles id="technologies">
    <SectionTitle>Technologies</SectionTitle>
    <ItemContainer>
      <Item>
        <DiReact size={30} color={"#fff"} />
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
        <DiFirebase size={30} color={"#fff"} />
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
        <DiZend size={30} color={"#fff"} />
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
