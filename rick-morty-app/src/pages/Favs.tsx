import React from 'react'
import { Store } from '../Store'
const EpisodeList = React.lazy(() => import('../componets/EpisodeList'))
export default function Favs() {
    const { state, dispatch } = React.useContext(Store);

    const props = {
        episodes: state.favourites,
        state,
        dispatch
    }
    return (
        <React.Fragment>
            <React.Suspense fallback={<p>Loading Favourites....</p>}>
                <EpisodeList {...props} />
            </React.Suspense>
        </React.Fragment>
    )
}
