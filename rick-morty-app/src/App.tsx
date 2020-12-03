import React from 'react';
import './App.css';
import { Store } from './Store';




function App(): JSX.Element {
  const state = React.useContext(Store);

  const fetchAllEpisodes = async () => {
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const data = await (await fetch(URL)).json()
/*     return dispatch({
      type: 'FETCH_DATA',
      payload: data._embedded.episodes
    }) */
  }

  React.useEffect(() => {
    state.episodes.length === 0 && fetchAllEpisodes()
  })

  console.log('<<<state>>>', state)
  return (
    <React.Fragment>
      <h1>Rick and Morty App</h1>
      <p>You can add your favourite episodes</p>
    </React.Fragment>
  );
}

export default App;
