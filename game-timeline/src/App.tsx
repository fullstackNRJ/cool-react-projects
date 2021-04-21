import React from 'react';
import './App.css';
import Loader from './components/Loader';
import ListView from './components/ListView';
import PlayerCard from './components/PlayerCard'
import { fetchDataFromServer } from './api';
import { Player } from './models/Player';
import Timeline from './components/Timeline';

function App() {
  const [loadingData, setLoadingData] = React.useState(false);
  const [listData, setlistData] = React.useState<Player[]>([]);
  const [filteredList, setFilteredList] = React.useState<Player[]>([]);
  const [filterObj, setFilterObj] = React.useState<{ year: string }>();

  React.useEffect(() => {
    const fetchAndsetData = async () => {
      setLoadingData(true)
      const data = await fetchDataFromServer();
      console.log({ data })
      setlistData(data);
      setFilteredList(data)
      setLoadingData(false);
    }
    fetchAndsetData();
  }, [])
  const handleFilterChange = (ev: { target: { value: any; }; }) => {

    const filteredItems = listData.filter(({ date }) => {
      console.log({ date, year: Number(filterObj?.year) })
      return date === Number(filterObj?.year)
    })
    console.log({ filteredItems })
    setFilteredList(filteredItems);
  }
  return (
    <div className="App">
      <header className="App-header">
        <span></span>
      </header>
      <body>
        <div className="searchbar_wrapper">
          <input type="text" className="searchbar" placeholder="Type a name or id" />
          <div className="filters_dropdown">
            <select name="filter_type" id="filter_type" onChange={(ev) => { 
              console.log({ year: ev.target.value })
              setFilterObj({ year: ev.target.value })
              handleFilterChange(ev) }}>
              <option value="2020">2020</option>
              <option value="1986">1986</option>
              <option value="2013">2013</option>
              <option value="1998">1998</option>
            </select>
          </div>
        </div>
        <div className="list_wrapper">
          {loadingData ? <Loader /> : <Timeline data={filteredList} />}
        </div>
      </body>
    </div>
  );
}

export default App;
