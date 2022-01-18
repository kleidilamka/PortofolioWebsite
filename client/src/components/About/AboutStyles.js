import styled from "styled-components";
import { devices } from "../../styles/devices";

export const AboutStyles = styled.div`
  /* width: 95%; */
  display: flex;
  flex-direction: row;
  margin-top: 20px 0;
  padding: 30px 100px;
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );
  @media ${devices.tablet} {
    width: 100%;
    padding: 30px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding: 0; */

  @media ${devices.tablet} {
    display: flex;
    align-items: center;
    margin: 20px 0;
  }
`;

export const AboutImg = styled.img`
  max-width: 350px;
  max-height: 3500px;
  border-radius: 50%;
  border-radius: 10%;

  border: double 1em transparent;
  background-image: linear-gradient(red, red),
    linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);

  background-origin: border-box;
  background-clip: content-box, border-box;
  flex: 1;
  @media ${devices.tablet} {
    width: 300px;
    height: 300px;
    margin-top: 30px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  width: 100%;
  @media ${devices.tablet} {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
`;

export const AboutTitle = styled.h3`
  color: #fff;
  font-size: 30px;
  margin-inline-end: 10px;
  text-align: center;
`;
