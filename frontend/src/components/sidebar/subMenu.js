import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: #fcad5a;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 80px;
  text-decoration: none;
  font-size: 25px;
  &:hover {
    background: #234635;
    border-left: 5px solid #632ce4;
    cursor: pointer;
  }
`;
const SidebarLabel = styled.span`
  margin-left: 16px;
`;
const DropdownLink = styled(Link)`
  background: #414757;
  height: 40px;
  padding-left: 4rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fcad5a;
  font-size: 18px;
  &:hover {
    background: #632ce4;
    cursor: pointer;
  }
`;
const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
