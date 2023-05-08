import React, { useEffect, useState } from 'react';
import { getTrips } from '../api/trips';

const Trips = () => {
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    const data = await getTrips();
    setTrips(data);
  };

  useEffect(() => {
    fetchTrips();
  }, []);
  return (
    <>
    <button onClick={fetchTrips}>Fetch Data</button>
    <table>
      <thead>
        <tr>
          <th>Departure Date</th>
          <th>Return Date</th>
          <th>Departure Station</th>
          <th>Return Station</th>
          <th>Distance</th>
          <th>Duration</th>
        </tr>
      </thead>
      <tbody>
        {trips.map((trip) => (
          <tr key={trip.departure_date}>
            <td>{trip.departure_date}</td>
            <td>{trip.return_date}</td>
            <td>{trip.departure_station_name}</td>
            <td>{trip.return_station_name}</td>
            <td>{trip.covered_distance_m} m</td>
            <td>{trip.duration_sec} sec</td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default Trips;
