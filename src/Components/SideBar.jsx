import React from 'react'
import {Calender} from '../Icons/exp';
import {Keep} from '../Icons/exp';
import {Task} from '../Icons/exp';
import {User} from '../Icons/exp';
import {Maps} from '../Icons/exp';
import {Plus} from '../Icons/exp';
import SidebarIcon from './SidebarIcon';
import SidebarIcon2 from './SidebarIcon2';

const sideBarIcon = [
    {
        link: "https://calendar.google.com/",
        image: Calender,
        name: "Calender",
    },
    {
        link : "https://keep.google.com/",
        image : Keep,
        name : "Notes",
    },
];

const sideBarIcon1 = [
    {
        link: "#",
        image: Task,
        name: "Task",
    },
    {
        link : "https://contacts.google.com/",
        image : User,
        name : "Contacts",
    },
    {
        link : "https://www.google.com/maps",
        image : Maps,
        name : "Maps",
    },
];


function SideBar() {
  return (
      <div className="w-14 bg-gray-200 h-screen">
          <ul>

            {sideBarIcon.map((item)=>{
                return(<SidebarIcon Link={item.link} Image={item.image} name={item.name} />)
            })}

            {sideBarIcon1.map((item)=>{
                return (<SidebarIcon2 Link={item.link} Image={item.image} name={item.name}/>
)
            })}
            <hr className="border-gray-400 my-3 w-10 mx-auto" />

            <li className="flex items-center p-4 hover:bg-gray-300 my-4">
              <span className="material-icons mr-1">
              <img src={Plus} alt="Plus" />
              </span> 
            </li>
          </ul>
        </div>
  )
}

export default SideBar
