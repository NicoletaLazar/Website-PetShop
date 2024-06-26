import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";

export const SidebarData = [
  {
    title: "Products",
    path: "/",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },

  {
    title: "Price",
    path: "/price",
    icon: <GiPriceTag />,
    cName: "nav-text",
  },

  {
    title: "Stock",
    path: "/stock",
    icon: <AiIcons.AiFillProduct />,
    cName: "nav-text",
  },
];
