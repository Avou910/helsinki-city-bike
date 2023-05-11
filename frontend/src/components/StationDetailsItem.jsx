import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStationById } from '../api/stations';


const StationDetailsItem = () => {
  const { asema_id } = useParams();
  const [station, setStation] = useState(null);

  const fetchStation = async () => {
    const data = await getStationById({ asema_id });
    setStation(data);
  };

  useEffect(() => {
    fetchStation();
  }, []);

  if (!station) {
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
          <th>Address</th>
          <th>Kaupunki</th>
          <th>Stad</th>
          <th>Operator</th>
          <th>Capacity</th>
          <th>Latitude</th>
          <th>Longitude</th>
        </tr>
      </thead>
      <tbody>
      {station.map((station) => (
          <tr key={station.fid}>
          <td>{station.fid}</td>
          <td>{station.asema_id}</td>
          <td>{station.nimi_fin}</td>
          <td>{station.namn_swe}</td>
          <td>{station.name_eng}</td>
          <td>{station.osoite}</td>
          <td>{station.Adress}</td>
          <td>{station.kaupunki}</td>
          <td>{station.stad}</td>
          <td>{station.operaattor}</td>
          <td>{station.kapasiteet}</td>
          <td>{station.x_coordinate}</td>
          <td>{station.y_coordinate}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

export default StationDetailsItem;