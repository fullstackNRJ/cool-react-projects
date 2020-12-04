export interface IState {
    episodes: Array<Episode>,
    favourites: Array<Episode>
}

export interface IAction {
    type: string,
    payload: any
}

export type CardProps = {
    episode : Episode,
    toggleFav : CallableFunction
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