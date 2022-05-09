import React from 'react';
import { FiMenu } from 'react-icons/fi';
import styled from './style.module.scss'
import IconHome from '../../assets/img/icons/home.png'

export function SideBar({show}) {
  return (
    <div 
    className={`${styled.Container} ${show ? '' : styled.active}`}>
      <ul>
        <li>
          <a href="">
            <i>
              <FiMenu />
            </i>
            <span>link</span>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <FiMenu />
            </i>
            <span>link</span>
          </a>
        </li>
        <li>
          <a href="">
            <i>
              <FiMenu />
            </i>
            <span>link</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
