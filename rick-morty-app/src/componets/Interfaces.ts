export interface IState{
    episodes:Array<Episode>,
    favourites : Array<Episode>
}

export interface IAction {
    type:string,
    payload : any
}

export interface Episode {

}