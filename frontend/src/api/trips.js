export const getTrips = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/trips`
    );
    return await res.json();
  };
  
  