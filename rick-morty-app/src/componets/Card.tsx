import React from 'react'
import { handleFavBtn } from '../Actions';
import { CardProps, Episode } from './Interfaces';

export default function Card({ episode, state, dispatch }: CardProps): JSX.Element {
    const { name, season, number, image: { medium, original }, airdate, airstamp, runtime, summary } = episode;

    return (
        <div>
            <h3>{name}</h3>
            <aside><span>Season : {season}</span><span>Ep : {number}</span></aside>
            <img src={medium} alt="pic" />
            <section>
                {<span>Aired at : {airdate}</span>}
                <span>Duration : {runtime}</span>
            </section>
            <summary>{summary}</summary>
            <button onClick={() => handleFavBtn(episode, state, dispatch)}>{state.favourites.find((data: Episode) => data.id === episode.id) ? 'UnFav' : 'Fav'}</button>
        </div>
    )
}
