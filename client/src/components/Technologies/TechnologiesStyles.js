import styled from "styled-components";
import { devices } from "../../styles/devices";

export const ItemContainer = styled.div`
  margin-top: 30px;
  display: flex;
  height: 30%;
  width: 85%;
  background-color: #101625;

  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 75%;
  }
`;

export const Item = styled.div`
  height: 100%;
  width: 50%;
  margin-inline: 50px;

  @media ${devices.tablet} {
    width: 100%;
    height: max-content;
  }
`;

export const ItemTitle = styled.h3`
  color: #fff;
  font-size: 28px;
  margin-block: 10px;

  @media ${devices.tablet} {
    font-size: 24;
    margin-block: 10px;
  }
`;

export const ItemDescription = styled.h3`
  font-size: 20px;
  color: lightgrey;
  margin-bottom: 10px;

  @media ${devices.tablet} {
    font-size: 20px;
    color: lightgrey;
    margin-bottom: 10px;
  }
`;
