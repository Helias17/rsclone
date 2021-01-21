// Geolocation API is available only on HTTPS(secure contexts), and doesn't work on HTTP
export const getPosition = () => {
    const options = {
        enableHighAccuracy: false,
        timeout: 50000,
        maximumAge: 0,
    };

    const success = (position) => {
        const crd = position.coords;

        console.log('Ваше текущее метоположение:');
        console.log(`Широта: ${crd.latitude}`);
        console.log(`Долгота: ${crd.longitude}`);
        console.log(`Плюс-минус ${crd.accuracy} метров.`);
    };

    const error = (err) => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    return navigator.geolocation.getCurrentPosition(success, error, options);
};
