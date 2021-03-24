import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FaQuestion from "react-icons/fa";
import * as GiDeath from "react-icons/gi";
import * as GiDuck from "react-icons/gi";
import * as BiGame from "react-icons/bi";
export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Log In",
    path: "/login",
    icon: <IoIcons.IoMdPeople />,
  },
  {
    title: "Sign Up",
    path: "/",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "High Scores",
    path: "/product",
    icon: <BiGame.BiGame />,
  },
  {
    title: "Pick A Quiz",
    path: "/messages",
    icon: <FaQuestion.FaQuestionCircle />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Level: Expert!",
        path: "/messages/message1",
        icon: <GiDeath.GiDeathZone />,
      },
      {
        title: "Level: Easy",
        path: "/messages/message2",
        icon: <GiDuck.GiDuck />,
      },
    ],
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
