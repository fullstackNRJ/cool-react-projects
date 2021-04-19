import React from 'react'
import { FixedSizeList as List } from 'react-window';
import PlayerCard from './PlayerCard';

const Timeline = ({ data }: any) => {

    const renderVirtualList = ({ index, style }: any) => {
        return (<div style={style} className="item">
            <PlayerCard {...data[index]}></PlayerCard>
        </div>)
    }

    return (
        <List
            height={Math.max(document.documentElement.clientHeight, window.innerHeight || 0)}
            itemCount={1000}
            itemSize={366}
            width="100%">
            {renderVirtualList}
        </List>
    )
}


export default Timeline
