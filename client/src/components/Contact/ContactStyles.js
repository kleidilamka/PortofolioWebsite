import styled from "styled-components";
import { devices } from "../../styles/devices";

export const ContactStyles = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;
  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );
  @media ${devices.tablet} {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-top: 50px;

  /* border: 1px solid red; */
`;

export const ContactLeft = styled.div`
  display: flex;
  background-color: #01071a;

  -webkit-box-shadow: 5px 6px 15px 5px #00163f;
  box-shadow: 5px 6px 15px 5px #00163f;
  margin-top: 20px;
  padding: 30px;
  width: 50%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 20px;

  @media ${devices.tablet} {
    width: 72%;
  }
`;

export const ContactText = styled.h3`
  font-size: 20px;
  color: lightgrey;

  @media ${devices.tablet} {
    align-self: start;
  }
`;

export const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 80%;
  align-items: flex-start;

  @media ${devices.tablet} {
    align-items: center;
  }
`;

export const ContactInput = styled.input`
  margin-top: 7px;
  height: 50px;
  width: 80%;
  border-radius: 8px;

  @media ${devices.tablet} {
    width: 100%;
  }
`;

export const MessageInput = styled.textarea`
  margin-top: 7px;
  height: 50px;
  width: 80%;
  border-radius: 8px;

  @media ${devices.tablet} {
    width: 100%;
  }
`;
