import { getCityName } from './getCityName';

export const getPosition = () => {
    const options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
    };

    const success = (position) => {
        const crd = position.coords;
        getCityName(crd.latitude, crd.longitude);
    };

    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
};
