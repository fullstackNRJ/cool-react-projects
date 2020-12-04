import React from 'react'
import { CardProps } from './Interfaces';

export default function Card({ episode, toggleFav }: CardProps): JSX.Element {
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
            <button onClick={() => toggleFav(episode)}>{'Fav/UnFav'} {'<3'}</button>
        </div>
    )
}
