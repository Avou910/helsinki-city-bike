import React from 'react';
import Header from '../components/Header';
import StationsList from '../components/StationsList';

const Stations = () => {
  return (
    <div>
      <Header/>
      <h1>Stations List</h1>
      <StationsList />
    </div>
  );
};

export default Stations;
