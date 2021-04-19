import React from 'react'
import { Player } from '../models/Player';
import PlayerCard from './PlayerCard';


const ListView = ({ data }: { data: Player[] }) => {

    return (
        <div className="Wrapper">
            {data.map((user) => (<PlayerCard {...user} />))}
        </div>
    )
}

export default ListView;
