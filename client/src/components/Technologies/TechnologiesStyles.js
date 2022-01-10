import styled from "styled-components";
import { devices } from "../../styles/devices";

export const ItemContainer = styled.div`
  margin-top: 30px;
  display: flex;
  height: 30%;
  width: 85%;
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );
  padding: 20px;
  border-radius: 12px;
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85%;
  }
`;

export const Item = styled.div`
  max-height: 90%;
  width: 50%;
  margin-inline: 50px;
  padding: 15px;
  background: #01071a;

  border-radius: 12px;

  @media ${devices.tablet} {
    width: 90%;
    height: max-content;
    margin-block: 15px;
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

export const List = styled.ul`
  color: #fff;
  list-style: none;
  font-size: 24px;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
