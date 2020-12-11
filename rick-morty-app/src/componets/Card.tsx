
import { handleFavBtn } from '../Actions';
import { CardProps, Episode } from './Interfaces';

export default function Card({ episode, state, dispatch }: CardProps): JSX.Element {
    const { name, season, number, image: { medium, }, airdate, runtime, summary } = episode;

    return (
        <div className='episode'>
            <aside><span>Season : {season} </span><span> Ep : {number}</span></aside>
            <figure className="wp-caption">
                <img className="poster" src={medium} alt={`S${season}E${number}_img`} />
                <figcaption className="wp-caption-text">
                    <h5>{name}</h5>
                    <section className="da_info-block">
                        {<div className="aa_info">Aired at : {new Date(airdate).toDateString()}</div>}
    <div className="d_info">Duration : {runtime} {'min'}</div>
                    </section>                   
                </figcaption>
            </figure>

            {/* <summary>{summary}</summary> */}
            <button onClick={() => handleFavBtn(episode, state, dispatch)}>{state.favourites.find((data: Episode) => data.id === episode.id) ? 'UnFav' : 'Fav'}</button>
        </div>
    )
}
