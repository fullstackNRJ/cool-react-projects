import React from 'react'
import { CardProps } from './Interfaces';

export default function Card({ episode, toggleFav }:CardProps): JSX.Element {
    const { name, season, number, image: { medium, original }, airstamp, runtime, summary } = episode;
    return (
        <div>
            <h3>{name}</h3>
            <aside><span>Season : {season}</span><span>Ep : {number}</span></aside>
            <img src={medium} alt="pic" />
            <section>
               {/*  <span>Aired at : {new Date(airstamp)}</span> */}
                <span>Duration : {runtime}</span>
            </section>
            <summary>{summary}</summary>
            <button onClick={() => toggleFav(episode)}>Add to Fav {'<3'}</button>
        </div>
    )
}
