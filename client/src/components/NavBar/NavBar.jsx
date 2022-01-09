import React, { useState } from "react";
import {
  ItemLink,
  List,
  MenuLabel,
  NavBackground,
  Navigation,
  Icon,
  NavTitle,
} from "./NavBarStyles";
import { Link } from "react-scroll";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const openNav = () => setClick(!click);
  const closeNav = () => setClick(false);

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={openNav}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <Link
          to="home"
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={-50}
          duration={500}
          delay={1000}
          isDynamic={true}
          onClick={closeNav}
        >
          <NavTitle>Kleidi Lamka</NavTitle>
        </Link>
        <List>
          {click && (
            <li>
              <ItemLink>
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offset={-50}
                  duration={500}
                  delay={1000}
                  isDynamic={true}
                  onClick={closeNav}
                >
                  Home
                </Link>
              </ItemLink>
            </li>
          )}
          <li>
            <ItemLink>
              <Link
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={500}
                delay={200}
                isDynamic={true}
                onClick={closeNav}
              >
                About
              </Link>
            </ItemLink>
          </li>
          <li>
            <ItemLink>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                delay={200}
                isDynamic={true}
                onClick={closeNav}
              >
                Projects
              </Link>
            </ItemLink>
          </li>
          <li>
            <ItemLink>
              <Link
                to="experience"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-50}
                duration={500}
                delay={200}
                isDynamic={true}
                onClick={closeNav}
              >
                Experience
              </Link>
            </ItemLink>
          </li>
          <li>
            <ItemLink>
              <Link
                to="technologies"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-130}
                duration={500}
                delay={200}
                isDynamic={true}
                onClick={closeNav}
              >
                Technologies
              </Link>
            </ItemLink>
          </li>
          <li>
            <ItemLink>
              <Link
                to="contact"
                smooth={true}
                hashSpy={true}
                // offset={50}
                duration={500}
                delay={200}
                isDynamic={true}
                onClick={closeNav}
              >
                Contact
              </Link>
            </ItemLink>
          </li>
        </List>
      </Navigation>
    </>
  );
};

export default NavBar;
