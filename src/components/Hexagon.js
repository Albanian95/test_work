import React from 'react'
import { data } from '../data/data'
import './hexagon.scss';

export const Hexagon = ({id, state}) => {
  const hexagon = data.items[id - 1]
  let position = data.states.classid[state - 1][id - 1]
  let size = position === 1 | position === 5 ? 'small' : 'medium'
  
  return (
    <div className="content">
      {state === id 
        ? <div className="content main">
          <p className="stad-name">Стадион</p>
          <span className="hard">{hexagon.date.toUpperCase()}</span>
          <span className="time_mrgn">{hexagon.time}</span>
          <button className="button">Купить билет</button>
        </div>
        : position === 0 || position === 6 
          ? null 
          : <span className={"container " + size}>{hexagon.date}</span>
      }
    </div>
  )
}