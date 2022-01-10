import React from "react";
import { SectionStyles, SectionText } from "../../styles/GlobalComponents";
import { LeftContainer } from "../About/AboutStyles";
import {
  ExperienceContainer,
  ExperienceStyles,
  ExperienceText,
  ItemLeft,
  ItemRight,
  Pointer,
  RoundPointer,
  VerticalLine,
} from "./ExperienceStyles";
import styles from "./Experience.module.css";

const data = [
  {
    id: 1,
    date: "March 2020",
    experience:
      "Initiated my journey as a software developer and started building websites with Javascript as the primary technology",
  },

  {
    id: 2,
    date: "January 2021",
    experience:
      "Started my first software development job at Karaspidhos Inc. and gained a lot of experience in a professional environment with expert mentors in their fields",
  },
];

const Experience = () => {
  return (
    <SectionStyles id="experience" className={styles.root}>
      <VerticalLine></VerticalLine>
      {data.map((item, index) => {
        if (index % 2 === 0) {
          return (
            <ExperienceStyles>
              <ItemLeft>
                <ExperienceText>{item.date}</ExperienceText>
                <ExperienceText className={styles.text}>
                  {item.experience}
                </ExperienceText>
              </ItemLeft>
              <RoundPointer>
                <Pointer></Pointer>
              </RoundPointer>
            </ExperienceStyles>
          );
        } else {
          return (
            <ExperienceStyles>
              <ItemRight>
                <ExperienceText>{item.date}</ExperienceText>
                <ExperienceText className={styles.text}>
                  {item.experience}
                </ExperienceText>
              </ItemRight>
              <RoundPointer>
                <Pointer></Pointer>
              </RoundPointer>
            </ExperienceStyles>
          );
        }
      })}
    </SectionStyles>
  );
};

export default Experience;
