import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStations } from '../api/ApiCalls';
import Pagination from './Pagination';


const StationsList = () => {
  const [stations, setStations] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 15; 

  const fetchStations = async () => {
    const data = await getStations();
    setStations(data);
  };

  useEffect(() => {
    fetchStations();
  }, []);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  const totalItems = stations.length;
  const offset = currentPage * itemsPerPage;
  const paginatedStations = stations.slice(offset, offset + itemsPerPage);


  return (
    <div>
    <table>
    <thead>
      <tr>
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
      {paginatedStations.map((station) => (
        <tr key={station.fid}>
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

<Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />

</div>
  );
};

export default StationsList;