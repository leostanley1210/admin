import {
  MODULES,
  ROUTE_PATHS,
  PERMISSION_MODULE_IDS,
} from "../../common/App.const";

import {
  MdOutlineVideoLibrary,
  MdOutlineSupportAgent,
  MdEvent,
  MdEventAvailable,
} from "react-icons/md";
import { GiScrollQuill, GiShoppingCart } from "react-icons/gi";
import { LuLayoutDashboard } from "react-icons/lu";
import { PiFlowerLotusLight, PiUsersThree } from "react-icons/pi";
import { GrYoga } from "react-icons/gr";
import { IoNewspaperOutline, IoSettingsOutline } from "react-icons/io5";
import { BiBookReader } from "react-icons/bi";
import React from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { TiCloudStorageOutline } from "react-icons/ti";

type SubMenuItem = {
  title: string;
  to: string;
  permission: number;
  icon?: React.ReactNode;
};

export type MenuItem = {
  title: string;
  icon: React.ReactNode;
  to?: string;
  submenu?: boolean;
  permission: number;
  submenuItems?: SubMenuItem[];
};

export const Menus: MenuItem[] = [
  {
    title: MODULES?.DASHBOARD,
    icon: React.createElement(LuLayoutDashboard, { size: 23 }),
    to: ROUTE_PATHS.DASHBOARD,
    permission: PERMISSION_MODULE_IDS?.DASHBOARD,
  },
  {
    title: MODULES?.PRACTICE,
    icon: React.createElement(GrYoga, { size: 23, color: "white" }),
    to: ROUTE_PATHS?.PRACTICE,
    permission: PERMISSION_MODULE_IDS?.PRACTICE,
  },
  {
    title: MODULES?.WISDOM,
    icon: React.createElement(BiBookReader, { size: 23, color: "white" }),
    submenu: true,
    permission: PERMISSION_MODULE_IDS?.WISDOM,
    submenuItems: [
      {
        title: MODULES?.SHORTS,
        to: ROUTE_PATHS?.SHORTS,
        permission: PERMISSION_MODULE_IDS?.SHORTS,
        icon: React.createElement(MdOutlineVideoLibrary, { size: 25 }),
      },
      {
        title: MODULES?.PROGRAM,
        to: ROUTE_PATHS?.PROGRAM,
        permission: PERMISSION_MODULE_IDS?.SHORTS,
        icon: React.createElement(MdEventAvailable, { size: 25 }),
      },
      {
        title: MODULES?.POEM,
        to: ROUTE_PATHS?.POEM,
        permission: PERMISSION_MODULE_IDS?.POEM,
        icon: React.createElement(GiScrollQuill, { size: 25 }),
      },
    ],
  },
  {
    title: MODULES?.EVENT,
    icon: React.createElement(MdEvent, { size: 23, color: "white" }),
    to: ROUTE_PATHS?.EVENT,
    permission: PERMISSION_MODULE_IDS?.EVENT,
  },
  {
    title: MODULES?.USER,
    icon: React.createElement(PiUsersThree, { size: 23, color: "white" }),
    to: ROUTE_PATHS?.USER,
    permission: PERMISSION_MODULE_IDS?.USER,
  },
  {
    title: MODULES?.ORGANIZATION,
    icon: React.createElement(PiFlowerLotusLight, { size: 23 }),
    to: ROUTE_PATHS?.ORGANIZATION,
    permission: PERMISSION_MODULE_IDS?.ORGANIZATION,
  },
  {
    title: MODULES?.SETTING,
    icon: React.createElement(IoSettingsOutline, { size: 23, color: "white" }),
    submenu: true,
    permission: PERMISSION_MODULE_IDS?.SETTING,
    submenuItems: [
      {
        title: MODULES?.PRACTICE_CATEGORY,
        to: ROUTE_PATHS?.PRACTICE_CATEGORY,
        permission: PERMISSION_MODULE_IDS?.SETTING,
        icon: React.createElement(TbCategoryPlus, { size: 25 }),
      },
      {
        title: MODULES?.STORAGE,
        to: ROUTE_PATHS?.STORAGE,
        permission: PERMISSION_MODULE_IDS?.SETTING,
        icon: React.createElement(TiCloudStorageOutline, { size: 25 }),
      },
    ],
  },
  {
    title: MODULES?.NEWS,
    icon: React.createElement(IoNewspaperOutline, { size: 23, color: "white" }),
    to: ROUTE_PATHS?.NEWS,
    permission: PERMISSION_MODULE_IDS?.NEWS,
  },
  {
    title: MODULES?.ONLINE_ORDER,
    icon: React.createElement(GiShoppingCart, { size: 23, color: "white" }),
    to: ROUTE_PATHS?.ONLINE_ORDER,
    permission: PERMISSION_MODULE_IDS?.ONLINE_ORDER,
  },
  {
    title: MODULES?.SUPPORT,
    icon: React.createElement(MdOutlineSupportAgent, {
      size: 23,
      color: "white",
    }),
    to: ROUTE_PATHS?.SUPPORT,
    permission: PERMISSION_MODULE_IDS?.SUPPORT,
  },
];
