import React from 'react';
import { IAction, IState } from './componets/Interfaces';

const initialState: IState = {
    episodes: [],
    favourites: []
}

export const Store = React.createContext<IState | any>(initialState)

const reducer = (state: IState, { type, payload }: IAction): IState => {
    switch (type) {
        case 'FETCH_DATA':
            return { ...state, episodes: payload }
        case 'ADD_FAV':
            return { ...state, favourites: payload }
        case 'DEL_FAV':
            return { ...state, favourites: payload }
        default:
            return state;
    }
}

export function StoreProvider(props: any): JSX.Element {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return <Store.Provider value={{ state:state, dispatch: dispatch }}>{props.children}</Store.Provider>
}