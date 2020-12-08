import Map from "./components/Map";
import "./App.css";
import { useState, useEffect } from "react";
import Header from './components/Header';
import Loader from './components/Loader';

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    const fetchEvents = async () =>{
      setLoading(true)
      const {events} = await (await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')).json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      { !loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  );
}

export default App;
