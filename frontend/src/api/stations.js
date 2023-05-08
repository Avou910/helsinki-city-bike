export const getStations = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/stations`
    );
    return await res.json();
  };
  
  