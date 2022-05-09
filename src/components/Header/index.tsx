import React, { useState } from 'react'
import styled from './style.module.scss'
import { FiMenu } from "react-icons/fi"
;
import { SideBar } from '../SideBar';
export function Header() {
  const [showSidebar, setShowSideBar] = useState(false);

  const handleMenu = () => {
    setShowSideBar(!showSidebar);
  }

  return (
    <>
      <div className={styled.Container}>
        <h1>Meu Dash</h1>
        <FiMenu 
        onClick={handleMenu}
        className={styled.menuIcon}/>
      </div>
      <SideBar 
      show={showSidebar}/>
    </>

  )
}
