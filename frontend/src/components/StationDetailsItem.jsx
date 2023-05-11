import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStationById, getTripCountById } from '../api/stations';


const StationDetailsItem = () => {
  const { asema_id } = useParams();
  const [station, setStation] = useState(null);
  const [tripCount, setTripCount] = useState(null);


  const fetchStation = async () => {
    const data = await getStationById({ asema_id });
    console.log("station",data)

    setStation(data);
  };

  useEffect(() => {
    fetchStation();
  }, []);

  const fetchTripCount = async () => {
    const data = await getTripCountById({ asema_id });
    console.log("tripcount chekc",data)
    setTripCount(data);
  };

  useEffect(() => {
    fetchTripCount();
  }, []);

  if (!station || !tripCount) {
    return <div>Loading...</div>;
  }

  return (
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
          <td>{station.x_coordinate}</td>
          <td>{station.y_coordinate}</td>
          <td>{tripCount[index].returned_trips_count}</td>
          <td>{tripCount[index].departure_trips_count}</td>

        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default StationDetailsItem;