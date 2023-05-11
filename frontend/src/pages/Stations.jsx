import React from 'react';
import Header from '../components/Header';
import StationsList from '../components/StationsList';
import './Stations.css';


const Stations = () => {
  return (
    <div> 
      <Header/>
    <div className='stations-container'>
      <h1>Stations List</h1>
      <StationsList />
    </div>
    </div>

  );
};

export default Stations;
