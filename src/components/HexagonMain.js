import React, { useState } from 'react'
import { data } from '../data/data'
import { Content } from './Content'
import './hexagoMain.scss'
import './hexagon.scss';
import './line.scss'

export const HexagonMain = () => {
  let [active, setActive] = useState(3)

  const renderHex = (active, device) => {
    let Hexs = []
    for (let i = 0; i < 5; i++) {
      let classId = data.states.classid[active - 1][i]
      let item = <Content
        key={i} 
        id={i + 1} 
        clName={device+classId} 
        state={active} 
        setActive={setActive}
      />
      Hexs.push(item)
    }
    return Hexs
  }

  const groupRender = (active, id) => {
    let team = id === 1 ? 'group_one' : 'group_two'
    let name = data.items[active - 1][team]
    let clName = "hard team team" + id
    return (<span className={clName}>{name}</span>)
  }

  const Roller = (e) => {
    e.stopPropagation()
    switch (active) {
      case 1:
        e.deltaY < 0 ? setActive(active) : setActive(active++)
        break;
      case 5:
        e.deltaY < 0 ? setActive(active--) : setActive(active)
        break;      
      default:
        e.deltaY < 0 ? setActive(active--) : setActive(active++)
    }
  }

  return (
    <div onWheel={Roller}>
      <div className="edge edge_left">
        {groupRender(active, 1)}
      </div>
      <div className="hex-container">
        {renderHex(active, 'desktop')}
      </div>
      <div className="edge edge_right">
        {groupRender(active, 2)}
      </div>
    </div>
  )
}