export interface IState {
    episodes: Array<Episode>,
    favourites: Array<Episode>
}

export interface IAction {
    type: string,
    payload: any
}

export type CardProps = {
    episode: Episode,
    state: IState,
    dispatch: Function
}

export type EpisodeListProps = {
    episodes: Array<Episode>,
    state: IState,
    dispatch: Function
}

export interface Episode {
    airdate: Date,
    airstamp: string,
    airtime: string,
    id: Number,
    image: { medium: string, original: string },
    name: string,
    number: Number,
    runtime: Number,
    season: Number,
    summary: string,
    type: string,
    url: string,
}