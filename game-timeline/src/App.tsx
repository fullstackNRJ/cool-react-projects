import React from 'react';
import './App.css';
import Loader from './components/Loader';
import ListView from './components';
import { fetchDataFromServer } from './api';
import { Player } from './models/Player';
import Timeline from './components/Timeline';

function App() {
  const [loadingData, setLoadingData] = React.useState(false);
  const [listData, setlistData] = React.useState<Player[]>([]);
  const [filteredList, setFilteredList] = React.useState<Player[]>([]);

  React.useEffect(() => {
    const fetchAndsetData = async () => {
      setLoadingData(true)
      const data = await fetchDataFromServer();
      console.log({ data })
      setlistData(data);
      setLoadingData(false);
    }
    fetchAndsetData();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <span></span>
      </header>
      <body>
        <div className="searchbar_wrapper">
          <input type="text" className="searchbar" placeholder="Type a name or id" />
          <div className="filters_dropdown">
            <select name="filter_type" id="filter_type">
              <option value="latest">{'Latest'}</option>
              <option value="oldest">Oldest</option>
              <option value="hot">Hot</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </div>
        <div className="list_wrapper">
          {loadingData ? <Loader /> : <Timeline data={listData} />}
        </div>
      </body>
    </div>
  );
}

export default App;
