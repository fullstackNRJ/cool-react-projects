import React from 'react'
import { Episode } from '../componets/Interfaces';
import { Store } from '../Store';

const EpisodeList = React.lazy(() => import('../componets/EpisodeList'))
export default function Home() {
    const { state, dispatch } = React.useContext(Store);
    
    const fetchAllEpisodes = async () => {
        const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
        const data = await (await fetch(URL)).json()
        return dispatch({
            type: 'FETCH_DATA',
            payload: data._embedded.episodes
        })
    }

    React.useEffect(() => {
        state.episodes.length === 0 && fetchAllEpisodes()
    })
    
    const HandleFavBtn = (episode: Episode) => {
        let action = {
            type: 'ADD_FAV',
            payload: episode
        }
        const Exists = state.favourites.find((data: Episode) => data.id === episode.id)
        if (Exists) {
            const arrayWithoutEpisode = state.favourites.filter((date: Episode) => date.id !== episode.id)
            action.type = 'DEL_FAV';
            action.payload = arrayWithoutEpisode;
        }
        return dispatch(action)
    }
    return (
        <React.Suspense fallback={<div> Loading Episodes....</div>}>
            <section>
                <EpisodeList state={state} handleFavBtn={HandleFavBtn} />
            </section>
        </React.Suspense>
    )
}
