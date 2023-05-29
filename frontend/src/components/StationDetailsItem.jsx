import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';
import LoadingScreen from '../components/LoadingScreen';
import { getStationById, getDataById, getTopStationsById } from '../api/ApiCalls';
import './StationDetailsItem.css';



const StationDetailsItem = () => {
  const { asema_id } = useParams();
  const [station, setStation] = useState(null);
  const [Data, setData] = useState(null);


  const fetchStation = async () => {
    const data = await getStationById({ asema_id });
    setStation(data);
  };

  useEffect(() => {
    fetchStation();
  }, []);

  const fetchData = async () => {
    const data = await getDataById({ asema_id });
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);


  if (!station || !Data) {
      return <div>
      <LoadingScreen />
      </div>;
  }

  console.log("sdata",Data)


  const fetchedStation = station[0];
  const fetchedDataStats = Data.data[0]


  return (
    <div className='station-details-container'>

      <div className='details-header'>

      <h1>{fetchedStation.nimi_fin} - {fetchedStation.kaupunki} </h1>
      <h1>{fetchedStation.namn_swe} - {fetchedStation.stad}</h1>
      <h3>Operated by: {fetchedStation.operaattor}</h3>

      </div>
   

    <div className='map-data-table-container'>
    
    <table className='data-table'>
      <thead>
      <tr>
      <th colSpan="2" style={{ textAlign: 'center' }}>
        <h2>Station data</h2>
      </th>
    </tr>
        <tr>
          <th>Feature</th>
          <th>Statistic</th>
        </tr>
      </thead>
      <tbody>
      <tr>
          <th>Capacity</th>
          <td>{fetchedStation.kapasiteet}</td>
      </tr>
      <tr>
          <th>Trips started from this station</th>
          <td>{fetchedDataStats.departure_trips_count}</td>
      </tr>
      <tr>
          <th>Trips ended to this station</th>
          <td>{fetchedDataStats.returned_trips_count}</td>
      </tr>
      <tr>
          <th>The average distance of a trip starting from the station</th>
          <td>{fetchedDataStats.avg_starting_distance} m</td>
      </tr>
      <tr>
          <th>The average distance of a trip ending at the station</th>
          <td>{fetchedDataStats.avg_ending_distance} m</td>
      </tr>
      </tbody>
    </table>

    {Data.topStations && (
  <table className='data-table'>
    <thead>
    <tr>
      <th colSpan="2" style={{ textAlign: 'center' }}>
        <h2>Top 5 most popular return stations for trips starting from this station</h2>
      </th>
    </tr>
      <tr>
        <th>Departure Station</th>
        <th>Trip Count</th>
      </tr>
    </thead>
    <tbody>
      {Data.topStations.map((station, index) => (
        <tr key={index}>
          <td>{station.departure_station_name}</td>
          <td>{station.trip_count}</td>
        </tr>
      ))}
    </tbody>
  </table>
)}

    {fetchedStation.y_coordinate && fetchedStation.x_coordinate && (
    <Map latitude={fetchedStation.y_coordinate} longitude={fetchedStation.x_coordinate} />
    )}
</div>
</div>
  );
};

export default StationDetailsItem;