import React from 'react'
import {RiMenu3Fill, RiLoginBoxLine} from 'react-icons/ri'
import './header.scss';

export const Header = () => {
  return (
    <div className="container">
      <ul className="group">
        <li className="nav"><a className="hover" href="/">БИЛЕТЫ И АБОНЕМЕНТЫ</a></li>
        <div className="group group_nav_three out">
          <li className="nav"><a className="hover" href="/">Как купить?</a></li>
          <li className="nav"><a className="hover" href="/">Правила</a></li>
          <li className="nav"><a className="hover" href="/">Возврат билетов</a></li>
        </div>
        <div className="group group_nav_one">
          <li className="nav">
            <a className="hover" href="/"><RiLoginBoxLine size="1.25em"/>
              <span style={{verticalAlign: 'top'}}>Войти</span>
            </a>
          </li>
          <li className="nav"><a href="/"><RiMenu3Fill size="1.3em"/></a></li>
        </div>
      </ul>
    </div>
  )
}