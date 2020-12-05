import { Episode, IState } from "./componets/Interfaces"

export const fetchAllEpisodes = async (dispatch: any) => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await (await fetch(URL)).json()
    return dispatch({
        type: 'FETCH_DATA',
        payload: data._embedded.episodes
    })
}

export const handleFavBtn = (episode: Episode|any, state: IState, dispatch: any) => {
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