export const getStations = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/stations`
    );
    return await res.json();
  };
  
  export const getStationById = async ({asema_id}) => {
    console.log("api id chekc",asema_id)
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/stations/${asema_id}`,
    );
    const data = await res.json();
    return data;
  };

  export const getTripCountById = async ({asema_id}) => {
    console.log("api id chekc",asema_id)
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/trips/${asema_id}`,
    );
    const data = await res.json();
    return data;
  };