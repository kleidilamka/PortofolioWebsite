import styled from "styled-components";
import { devices } from "../../styles/devices";

export const ExperienceStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media ${devices.tablet} {
    margin-block: 50px;
  }
`;

export const ItemLeft = styled.div`
  height: 300px;
  width: 47%;
  max-width: 47%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: flex-end;
  align-items: flex-end;
  @media ${devices.tablet} {
    height: 50%;
    width: 90%;
    max-width: 90%;
    align-self: center;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
  }
`;

export const ItemRight = styled.div`
  height: 300px;
  width: 47%;
  max-width: 47%;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  @media ${devices.tablet} {
    height: 50%;
    width: 90%;
    max-width: 90%;
    align-self: center;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: start;
  }
`;

export const ExperienceText = styled.h3`
  padding: 10px;
  border-radius: 10px;
  font-size: 28;
  color: lightgrey;
  width: 57%;

  font-weight: 500;

  @media ${devices.tablet} {
    height: 90%;
    width: 90%;
    max-width: 90%;
  }
`;

export const VerticalLine = styled.div`
  margin-top: 50px;
  height: 60%;
  position: absolute;
  border: 2px solid #fff;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const RoundPointer = styled.div`
  height: 20px;
  width: 20px;
  position: absolute;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const Pointer = styled.div`
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: #00163f;
  @media ${devices.tablet} {
    height: 97.5%;
    display: none;
  }
`;
