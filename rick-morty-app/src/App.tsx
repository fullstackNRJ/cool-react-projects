import React from 'react';
import './App.css';
import Header from './componets/Header';
import Card from './componets/Card';
import { Store, StoreProvider } from './Store';
import { Episode } from './componets/Interfaces';




function App(): JSX.Element {
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
    console.log('<<Episode clicked>>', episode)
  }
  return (
    <React.Fragment>
      <div>
        <Header />
        <section>
          {state.episodes.map((episode: Episode, key: number) => {
            return (<Card key={key} episode={episode} toggleFav={HandleFavBtn} />)
          })}
        </section>
      </div>


    </React.Fragment>

  );
}

export default App;
