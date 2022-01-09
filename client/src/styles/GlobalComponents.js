import styled from "styled-components";
import { devices } from "./devices";

export const SectionStyles = styled.section`
  /* margin-top: 60px; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  line-height: 60px;
  margin-top: 30px;
  width: 80%;

  @media ${devices.laptop} {
    color: white;
    font-size: 40px;
    line-height: 50px;
    width: 80%;
  }

  @media ${devices.tablet} {
    margin-top: 0;
    color: white;
    font-size: 40px;
    line-height: 50px;
    width: 80%;
  }
`;

export const SectionText = styled.p`
  color: lightgrey;
  font-size: 24px;
  line-height: 40px;
  margin-top: 30px;
  max-width: 80%;

  @media ${devices.tablet} {
    color: lightgrey;
    font-size: 20px;
    width: 80%;
    margin-top: 30px;
  }
`;

export const SectionDivider = styled.div`
  width: 70px;
  height: 5px;
  border-radius: 10px;
  background-color: #fff;

  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  margin: 50px 150px 50px 150px;
  @media ${devices.tablet} {
    width: 70px;
    height: 5px;
    margin: 4rem 3rem;
  }
`;

export const SectionLeft = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 50px 150px;
  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    margin: 0;
  }
`;

export const Button = styled.div`
  background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  height: 52px;
  width: 200px;
  border-radius: 50px;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  @media ${devices.tablet} {
    height: 52px;
    width: 150px;
    border-radius: 50px;
    color: white;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;

    background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
  }
`;
