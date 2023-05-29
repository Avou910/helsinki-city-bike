import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../components/Map';
import LoadingScreen from '../components/LoadingScreen';
import { getStationById, getTripCountById } from '../api/stations';
import './StationDetailsItem.css';



const StationDetailsItem = () => {
  const { asema_id } = useParams();
  const [station, setStation] = useState(null);
  const [tripCount, setTripCount] = useState(null);
 


  const fetchStation = async () => {
    const data = await getStationById({ asema_id });
    setStation(data);
  };

  useEffect(() => {
    fetchStation();
  }, []);

  const fetchTripCount = async () => {
    const data = await getTripCountById({ asema_id });
    setTripCount(data);
  };

  useEffect(() => {
    fetchTripCount();
  }, []);


  if (!station || !tripCount) {
      return <div>
      <LoadingScreen />
      </div>;
  }

  const fetchedStation = station[0];
  const fetchedTripCount = tripCount[0]

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
          <td>{fetchedTripCount.departure_trips_count}</td>
      </tr>
      <tr>
          <th>Trips ended to this station</th>
          <td>{fetchedTripCount.returned_trips_count}</td>
      </tr>


      </tbody>
    </table>

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
          <td>{fetchedTripCount.departure_trips_count}</td>
      </tr>
      <tr>
          <th>Trips ended to this station</th>
          <td>{fetchedTripCount.returned_trips_count}</td>
      </tr>


      </tbody>
    </table>

    {fetchedStation.y_coordinate && fetchedStation.x_coordinate && (
    <Map latitude={fetchedStation.y_coordinate} longitude={fetchedStation.x_coordinate} />
    )}

</div>

</div>

  );
};

export default StationDetailsItem;