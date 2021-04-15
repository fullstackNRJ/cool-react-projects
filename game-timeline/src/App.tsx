import React from 'react';
import './App.css';
import Loader from './components/Loader';
import ListView from './components';

function App() {
  const [loadingData, setLoadingData] = React.useState(true);
  const [listData, setlistData] = React.useState([]);
  const [filteredList, setFilteredList] = React.useState([]);

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])
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
              <option value="latest"><span>Latest</span></option>
              <option value="oldest"><span>Oldest</span></option>
              <option value="hot"><span>Hot</span></option>
              <option value="trending"><span>Trending</span></option>
            </select>
          </div>
        </div>
        <div className="list_wrapper">
          {loadingData ? <Loader /> : <ListView data={filteredList} />}
        </div>
      </body>
    </div>
  );
}

export default App;
