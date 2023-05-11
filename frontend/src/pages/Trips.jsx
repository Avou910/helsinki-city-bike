import React from 'react';
import Header from '../components/Header';
import TripsList from '../components/TripsList';
import './Trips.css';


const Trips = () => {
  return (
    <div> 
      <Header/>
    <div className='trips-container'>
      <h1>Trips List</h1>
      <TripsList />
    </div>
    </div>

  );};
export default Trips;
