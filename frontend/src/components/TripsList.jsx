import React, { useEffect, useState } from 'react';
import { getTrips } from '../api/trips';

const TripsList = () => {
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    const data = await getTrips();
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

  return (
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
        {trips.map((trip) => (
          <tr>
            <td>{trip.departure_station_name}</td>
            <td>{trip.return_station_name}</td>
            <td>{convertMetersToKilometers(trip.covered_distance_m)} km</td>
            <td>{convertSecondsToMinutes(trip.duration_sec)} min</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TripsList;
