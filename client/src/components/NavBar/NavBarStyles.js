import React, { useState } from "react";
import styled from "styled-components";
import { devices } from "../../styles/devices";

export const MenuLabel = styled.label`
  display: none;
  @media ${devices.tablet} {
    display: flex;

    position: fixed;
    top: -20px;
    right: 10px;

    cursor: pointer;
    z-index: 1000;

    text-align: center;
  }
`;

export const NavBackground = styled.div`
  display: none;
  @media ${devices.tablet} {
    display: flex;

    position: fixed;
    background: radial-gradient(
      circle at 30% -100%,
      #042c54 25%,
      rgba(4, 44, 84, 1) 85%,
      rgba(27, 120, 222, 1) 100%
    );
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    z-index: 600;
    transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
    transition: transform 0.8s;
  }
`;

export const Icon = styled.span`
  @media ${devices.tablet} {
    position: relative;
    background-color: ${(props) => (props.clicked ? "transparent" : "#fff")};
    width: 2rem;
    height: 2px;
    display: inline-block;
    margin-top: 3.5rem;
    transition: all 0.3s;

    &::before,
    &::after {
      content: "";
      background-color: #fff;
      width: 2rem;
      height: 2px;
      display: inline-block;

      position: absolute;
      left: 0;
      transition: all 0.3s;
    }

    &::before {
      top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
      transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
    }

    &::after {
      top: ${(props) => (props.clicked ? "0" : "0.8rem")};

      transform: ${(props) =>
        props.clicked ? "rotate(-135deg)" : "rotate(0)"};
    }

    ${MenuLabel}:hover &::before {
      top: ${(props) => (props.clicked ? "0" : "-1rem")};
    }
    ${MenuLabel}:hover &::after {
      top: ${(props) => (props.clicked ? "0" : "1rem")};
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  z-index: 100;
  flex-direction: row;
  justify-content: space-around;
  background-color: #101625;
  position: fixed;
  width: 100%;
  padding: 15px 0;
  @media ${devices.tablet} {
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 600;
    background-color: transparent;

    width: ${(props) => (props.clicked ? "100%" : "0")};
    opacity: ${(props) => (props.clicked ? "1" : "0")};

    transition: width 0.8s, opacity 0.8s;
  }
`;

export const NavTitle = styled.h2`
  color: #fff;
  margin: auto;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style: none;

  @media ${devices.tablet} {
    display: block;
    position: absolute;
    list-style: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: left;
    width: 100%;
  }
`;
export const ItemLink = styled.a`
  display: inline;
  margin: auto 3rem;
  font-size: 20px;
  align-items: center;
  color: white;
  border: 1px solid transparent;
  padding: 10px;
  border-radius: 10px;
  @media ${devices.tablet} {
    display: inline-block;
    font-size: 3rem;
    font-weight: 300;
    text-decoration: none;
    color: #fcfcfc;
    padding: 1rem 2rem;

    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #cac8d1 50%
    );
    background-size: 240%;
    transition: all 0.4s;

    &:hover,
    &:active {
      background-position: 100%;
      color: #101625;
      transform: translateX(1rem);
    }
  }
`;
