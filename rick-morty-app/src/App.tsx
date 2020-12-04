import React from 'react';
import './App.css';
import Header from './componets/Header';
import { Store } from './Store';


function App(props:any): JSX.Element {
  const { state } = React.useContext(Store)
  return (
    <React.Fragment>
      <Header length={state.favourites.length} />
      {props.children}
    </React.Fragment>

  );
}

export default App;
