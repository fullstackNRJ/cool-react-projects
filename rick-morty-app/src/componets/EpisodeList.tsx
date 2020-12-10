import React from 'react'
import Card from './Card';
import { Episode, EpisodeListProps } from './Interfaces';

export default function EpisodeList({ episodes, state, dispatch}: EpisodeListProps) {

    const cardProps = {
        state, dispatch
    }

    return (
        <div className="list">
            {episodes.map((episode: Episode, key: number) => {
                return (<Card key={key} episode={episode} {...cardProps} />)
            })}
        </div>
    )
}
