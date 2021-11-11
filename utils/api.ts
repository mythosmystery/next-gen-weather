const units = 'imperial';
const key = '9070db7d3bd1c053f1464efcd982545e';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const onecallURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=';

export const iconURL = 'https://openweathermap.org/img/wn/';

interface Coords {
   lat: number;
   lon: number;
}

export const getCurrentWeather = async (city: string) => {
   const res = await fetch(apiURL + city + '&appid=' + key + '&units=' + units);
   if (!res.ok) throw new Error('Failed to fetch');
   return res.json();
};

export const getForecast = async ({ lon, lat }: Coords) => {
   const res = await fetch(
      onecallURL + lat + '&lon=' + lon + '&exclude=hourly,minutely&units=' + units + '&appid=' + key
   );
   if (!res.ok) throw new Error('Failed to fetch');
   return res.json();
};
