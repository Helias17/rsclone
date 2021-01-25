const getPosition = () => new Promise((resolve, reject) => {
  let coords;

  const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };

  const success = (position) => {
    coords = position.coords;
    resolve(coords);
  };

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    reject(coords);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);
});

export default getPosition;
