import React from 'react';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import {
  FaTh,
  FaBars,
} from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { SlPeople } from "react-icons/sl";
import { FaPeopleCarry } from "react-icons/fa";

import { BiBookContent, BiLogInCircle } from "react-icons/bi";
export const SidebarData = [
  {
    title: 'Workers',  //reports
    path: '/admin/wo',
    icon: <SlPeople />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav:[
      {
        title: 'View',
        path:'/admin/wo/get',
      }
    ]
  },
  {
    title: 'Coordinator', //products
    path: '/admin/co',
    icon: <FaPeopleCarry />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav:[
      {
        title:'View',
        path:'/admin/co/get',
      }
    ]
  },
 
  {
    title: 'Stock Insert', //messages
    path: '/admin/di',
    icon: <AiOutlineStock/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav:[
      {
        title:'Erode',
        path:'/admin/di',
      },
      {
        title:'Coimbatore',
        path:'/admin/di/co/',
      },
      {
        title:'Tiruppur',
        path:'/admin/di/ti/',
      },
      {
        title:'Tirchy',
        path:'/admin/di/tr/',
      },
      {
        title:'Pollachi',
        path:'/admin/di/po/',
      },
      {
        title:'Nammakal',
        path:'/admin/di/na/',
      },
    ]
  },
  {
    title: 'Stock View', //messages
    path: '/admin/di',
    icon: <AiOutlineStock/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav:[
      {
        title:'Erode',
        path:'/admin/di/get',
      },
      {
        title:'Coimbatore',
        path:'/admin/di/co/get',
      },
      {
        title:'Tiruppur',
        path:'/admin/di/ti/get',
      },
      {
        title:'Tirchy',
        path:'/admin/di/tr/get',
      },
      {
        title:'Pollachi',
        path:'/admin/di/po/get',
      },
      {
        title:'Nammakal',
        path:'/admin/di/na/get',
      },
    ]
  },
  
];