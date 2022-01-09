import styled from "styled-components";
import { devices } from "../../styles/devices";

export const HeroText = styled.p`
  color: lightgrey;
  font-size: 24px;
  line-height: 40px;
  margin-top: 30px;
  width: 50%;

  @media ${devices.tablet} {
    color: lightgrey;
    font-size: 20px;
    width: 80%;
    margin-top: 30px;
  }
`;

export const WhiteButton = styled.div`
  /* background: #a8dadc; */
  height: 52px;
  width: 200px;
  border-radius: 50px;
  font-weight: 600;
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 20px;
  border: double 1px transparent;
  background-image: linear-gradient(#101625, #101625),
    linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);

  background-origin: border-box;
  background-clip: content-box, border-box;
  :hover {
    background: linear-gradient(100deg, #00dbd8 0%, #b133ff 100%);

    background-origin: border-box;
    background-clip: content-box, border-box;
    color: white;
  }

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
  }
`;
