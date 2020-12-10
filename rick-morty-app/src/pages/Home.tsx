import React from 'react'
import { fetchAllEpisodes } from '../Actions';
import { Store } from '../Store';


const EpisodeList = React.lazy(() => import('../componets/EpisodeList'))
export default function Home() {
    const { state, dispatch } = React.useContext(Store);

    React.useEffect(() => {
        state.episodes.length === 0 && fetchAllEpisodes(dispatch)
    })

    const props = {
        episodes: state.episodes,
        state,
        dispatch,
    }

    return (
        <React.Suspense fallback={<div> Loading Episodes....</div>}>
            <section>
                <EpisodeList {...props} />
            </section>
        </React.Suspense>
    )
}
