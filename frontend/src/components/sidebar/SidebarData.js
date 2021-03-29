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
  // {
  //   title: "Log In",
  //   path: "/login",
  //   icon: <IoIcons.IoMdPeople />,
  // },
  // {
  //   title: "Sign Up",
  //   path: "/",
  //   icon: <IoIcons.IoIosPaper />,
  //   iconClosed: <RiIcons.RiArrowDownSFill />,
  //   iconOpened: <RiIcons.RiArrowUpSFill />,
  // },
  {
    title: "Pick A Quiz",
    icon: <FaQuestion.FaQuestionCircle />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Expert",
        path: "/expertquiz",
        icon: <GiDeath.GiDeathZone />,
      },
      {
        title: "Pro",
        path: "/proquiz",
        icon: <GiDuck.GiHalberdShuriken />,
      },
      {
        title: "Easy",
        path: "/easyquiz",
        icon: <GiDuck.GiDuck />,
      },
    ],
  },
  {
    title: "Categories",
    icon: <FaQuestion.FaList />,

    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Animals",
        path: "/animals",
        icon: <GiDuck.GiSniffingDog/>,
      },
      {
        title: "Celebs",
        path: "/celebs",
        icon: <GiDuck.GiPhotoCamera/>,
      },
      {
        title: "History",
        path: "/history",
        icon: <GiDuck.GiCannon />,
      },
      {
        title: "Science",
        path: "/science",
        icon: <GiDuck.GiMadScientist />,
      },
      {
        title: "Sports",
        path: "/sports",
        icon: <GiDeath.GiSoccerBall />,
      },
    ],
  },
  {
    title: "About",
    path: "/about",
    icon: <GiDuck.GiTeamIdea />,
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
