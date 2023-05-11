import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStations } from '../api/stations';

const StationsList = () => {
  const [stations, setStations] = useState([]);

  const fetchStations = async () => {
    const data = await getStations();
    setStations(data);
  };

  useEffect(() => {
    fetchStations();
  }, []);


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
      </tr>
    </thead>
    <tbody>
      {stations.map((station) => (
        <tr key={station.fid}>
          <td>{station.fid}</td>
          <td><Link to={`/stations/${station.asema_id}`}>{station.asema_id}</Link></td>
          <td>{station.nimi_fin}</td>
          <td>{station.namn_swe}</td>
          <td>{station.name_eng}</td>
          <td>{station.osoite}</td>
          <td>{station.kaupunki}</td>
          <td>{station.stad}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default StationsList;