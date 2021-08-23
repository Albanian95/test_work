import React from 'react'
import { Hexagon } from './Hexagon';

export const Content = ({id, clName, state, setActive}) => {

return (
    <div className={'hex_start hexagon_' + clName} onClick={() => setActive(id)}>
        <Hexagon id={id} state={state}/>
    </div>
)
}