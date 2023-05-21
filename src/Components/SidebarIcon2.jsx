import React from 'react'

function SidebarIcon2(props) {
  return (
    <li className="flex items-center p-3 hover:bg-gray-300 my-4">
              <span className="material-icons mr-1">
              <a href={props.Link}><img src={props.Image} alt={props.name} /></a>
              </span> 
    </li>
  )
}

export default SidebarIcon2;
