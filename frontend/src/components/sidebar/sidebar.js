import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./subMenu";
import { IconContext } from "react-icons/lib";
import Searchbar from "./Searchbar";
import "./Sidebar.css";

const Nav = styled.div`
  background-color: #6201c4;

  width: 100%;
  height: 110px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  color: yellow;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const SidebarNav = styled.nav`
  background-color: #6201c4;
  opacity: 0.9;
  width: 250px;
  height: 100vh;
  color: yellow;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 250ms;
  z-index: 10;
`;
const SidebarWrap = styled.div`
  width: 100%;
`;
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={({ color: "#f0e130" }, { size: "4vh" })}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} className="sidelogo" />
          </NavIcon>

          <Searchbar />
          <a className="loginbutton" id="loginButton" href="/login">
            Login Here
          </a>
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