import styled from "styled-components";
import { devices } from "../../styles/devices";

export const ImageContainer = styled.div`
  margin: 40px auto;
  width: 95%;
  height: 720px;
  border-radius: 10px;
  background-image: linear-gradient(135deg, #86a8e7 10%, #91eae4 100%);
  @media ${devices.tablet} {
    height: 700px;
    width: 85%;
  }
`;
