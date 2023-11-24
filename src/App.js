import { useEffect, useState } from 'react';
import './App.css';
import Search from './search/Search';
import Map from './map/Map';
import { MapContainer, TileLayer } from 'react-leaflet';
import Show from './show/Show';
function App() {

  const [userValue, setUserValue] = useState(null)
  const [feedback, setFeedback] = useState('good')
  const [data, setData] = useState(null)
  const apiLink = 'https://geo.ipify.org/api/v2/country,city?apiKey=at_5fF14q7M73DJDlUy23QiDMyERrlee&ipAddress='


  const getUserValue = (inputValue)=>{
    console.log(inputValue)
    setUserValue(inputValue)
  }

  useEffect( ()=>{
    const currentLink = apiLink+userValue
    let tempFeedback = ''
    fetch(currentLink).then((result)=>{
      if (!result.ok){
        tempFeedback = 'bad' 
      }else{
        tempFeedback = 'good'
      }
      return result.json()
    }).then(data=>{
      setData(data)
      setFeedback(tempFeedback)
    })
  },[userValue])

  return (
    <div className='App'>
      <div className='head'>
        <h1>IP Address Tracker</h1>
        <Search getUserValue={getUserValue}/>
      </div>
      {feedback==='good' && data && (
      <>
        <Show data={data}/>
        <MapContainer className= 'chan' center={[data.location.lat, data.location.lng]} zoom={13} scrollWheelZoom={true}>
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Map data={data}/>
        </MapContainer>
      </>
      )}
    </div>
  );
}

export default App;
