import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./subMenu";
import { IconContext } from "react-icons/lib";
import Searchbar from "./Searchbar";
import "./sidebar.css";

const Nav = styled.div`
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  color: #fcad5a;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
  box-shadow: 5px 5px 5px 5px black;
  background-image: url(https://wallpaperaccess.com/full/439751.jpg);
  border-radius: 45px;
  margin-top: 20vh;
  width: 250px;
  margin-left: 2vh;
  height: 70vh;
  color: #fcad5a;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 1.5s;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;
const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={({ color: "#f0e130" }, { size: "4vh" })}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} className="sidelogo" />
          </NavIcon>



          {/* <Searchbar /> */}

          <a id="signUpButton" href="/signup">
            Sign Up
          </a>

          {props.user.first_name ? (
            <span>
              <p id="loginInfo">
                {props.user.first_name} {props.user.last_name}
              </p>
              <a className="loginbutton" id="loginButton" href="/login">
                Sign Out
              </a>{" "}
            </span>
          ) : (
            <a className="loginbutton" id="loginButton" href="/login">
              Log In
            </a>
          )}
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
