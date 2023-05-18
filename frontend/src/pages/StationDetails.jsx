import React from 'react';
import Header from '../components/Header';
import StationDetailsItem from '../components/StationDetailsItem';

const StationDetails = () => {


  return (
    <div> 
    <Header/>
    <div className='station-details-container'>
      <h1>Station Details</h1>
      <StationDetailsItem />
    </div>
    </div>


  );
};

export default StationDetails;
