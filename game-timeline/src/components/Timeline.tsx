import React from 'react'
import { FixedSizeList as List } from 'react-window';
import ListView from './ListView'

const Timeline = ({ data }: any) => {
    return (
        <List
            height={Math.max(document.documentElement.clientHeight, window.innerHeight || 0)}
            itemCount={1000}
            itemSize={366}
            width="100%">
            <ListView data={data} />
        </List>
    )
}

const renderVirtualList = ({index, style}:any) =>{
    return <ListView 
}
export default Timeline
