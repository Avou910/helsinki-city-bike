import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//import Card from '@mui/material/Card';
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


  const selectedStation = station[0];


  return (
    <div className='station-details-container'>
    <table>
      <thead>
        <tr>
          <th>FID</th>
          <th>Asema ID</th>
          <th>Name (Fin)</th>
          <th>Name (Swe)</th>
          <th>Name (Eng)</th>
          <th>Osoite</th>
          <th>Kaupunki</th>
          <th>Stad</th>
          <th>Operator</th>
          <th>Capacity</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Ended trips</th>
          <th>Started trips</th>
        </tr>
      </thead>
      <tbody>
      {station.map((station,index) => (
          <tr key={station.fid}>
          <td>{station.fid}</td>
          <td>{station.asema_id}</td>
          <td>{station.nimi_fin}</td>
          <td>{station.namn_swe}</td>
          <td>{station.name_eng}</td>
          <td>{station.osoite}</td>
          <td>{station.kaupunki}</td>
          <td>{station.stad}</td>
          <td>{station.operaattor}</td>
          <td>{station.kapasiteet}</td>
          <td>{station.y_coordinate}</td>
          <td>{station.x_coordinate}</td>
          <td>{tripCount[index].returned_trips_count}</td>
          <td>{tripCount[index].departure_trips_count}</td>
        </tr>
      ))}
      </tbody>
    </table>

  
    <div className='map-container'>
    {selectedStation.y_coordinate && selectedStation.x_coordinate && (
    <Map latitude={selectedStation.y_coordinate} longitude={selectedStation.x_coordinate} />
    )}
</div>


    </div>
  );
};

export default StationDetailsItem;