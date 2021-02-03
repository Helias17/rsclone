export default async function getCityName(lat, lng) {
  const userCity = document.getElementById('userCity');
  userCity.title = `${lat} ${lng}`;

  userCity.addEventListener('click', () => {
    navigator.clipboard.writeText(userCity.title);
  });

  const locationIQToken = 'pk.0ab56532bbdca9aa85cb09a84b391ec0'; // Authorized HTTP Referrers :http://localhost:8080/, https://rustartup.com/
  const url = `https://us1.locationiq.com/v1/reverse.php?key=${locationIQToken}&lat=${lat}&lon=${lng}&accept-language=en&format=json`;
  const request = await fetch(url);
  const json = await request.json();
  const city = json.address.town || json.address.city;

  return city;
}
