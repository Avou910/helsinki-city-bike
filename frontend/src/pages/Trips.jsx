import React from 'react';
import Header from '../components/Header';
import TripsList from '../components/TripsList';

const Trips = () => {
  return (
    <div>
      <Header/>
      <h1>Trips List</h1>
      <TripsList />
    </div>
  );};
export default Trips;
