import React from 'react'
import Card from './Card';
import { Episode, EpisodeListProps } from './Interfaces';

export default function EpisodeList({ state, handleFavBtn }: EpisodeListProps) {

    return (
        <div>
            {state.episodes.map((episode: Episode, key: number) => {
                return (<Card key={key} episode={episode} toggleFav={handleFavBtn} />)
            })}
        </div>
    )
}
