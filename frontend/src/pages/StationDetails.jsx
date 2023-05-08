import React from 'react';
import Header from '../components/Header';
import StationDetailsItem from '../components/StationDetailsItem';

const StationDetails = () => {
  return (
    <div>
      <Header />
      <h1>Single Station</h1>
      <StationDetailsItem />
    </div>
  );
};

export default StationDetails;
