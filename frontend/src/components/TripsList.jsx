import React, { useEffect, useState } from 'react';
import Slider from '@material-ui/core/Slider';
import { getTrips } from '../api/trips';

const TripsList = () => {
  const [trips, setTrips] = useState([]);
  const [distanceFilter, setDistanceFilter] = useState([0, 100]);
  const [durationFilter, setDurationFilter] = useState([0, 120]);

  const fetchTrips = async () => {
    const data = await getTrips();
    console.log("chekc cehkc",data)
    setTrips(data);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const convertMetersToKilometers = (meters) => {
    return (meters / 1000).toFixed(2);
  };

  const convertSecondsToMinutes = (seconds) => {
    return Math.round(seconds / 60);
  };

  const filterTrips = (data) => {
    const distance = data.covered_distance_m / 1000;
    const duration = data.duration_sec / 60;
    return (
      distance >= distanceFilter[0] &&
      distance <= distanceFilter[1] &&
      duration >= durationFilter[0] &&
      duration <= durationFilter[1]
    );
  };

  const handleDistanceSliderChange = (event, newValue) => {
    setDistanceFilter(newValue);
  };

  const handleDurationSliderChange = (event, newValue) => {
    setDurationFilter(newValue);
  };

  return (
    <div>
      <div>
        <p>Distance:</p>
        <Slider value={distanceFilter} onChange={handleDistanceSliderChange} valueLabelDisplay="auto" />
      </div>
      <div>
        <p>Duration:</p>
        <Slider value={durationFilter} onChange={handleDurationSliderChange} valueLabelDisplay="auto" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Departure Station</th>
            <th>Return Station</th>
            <th>Distance</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {trips.filter(filterTrips).map((trip) => (
            <tr key={trip.id}>
              <td>{trip.departure_station_name}</td>
              <td>{trip.return_station_name}</td>
              <td>{convertMetersToKilometers(trip.covered_distance_m)} km</td>
              <td>{convertSecondsToMinutes(trip.duration_sec)} min</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TripsList;
