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
    date: "14 March 2020",
    experience:
      "Frontend experience with multiple tools most mentioned React and React Native Frontend experience with multiple tools most mentioned React and React Native Frontend experience with multiple tools most mentioned",
  },

  {
    id: 2,
    date: "22 January 2021",
    experience:
      "Backend experience with multiple tools most mentioned React and React Native Frontend experience with multiple tools most mentioned React and React Native Frontend experience with multiple tools most mentioned",
  },
  {
    id: 3,
    experience: "              ",
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
                <SectionText
                  style={{
                    marginBottom: -80,
                  }}
                >
                  {item.date}
                </SectionText>
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
                <SectionText style={{ marginBottom: -80 }}>
                  {item.date}
                </SectionText>
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
