const units = 'imperial';
const key = '9070db7d3bd1c053f1464efcd982545e';
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const onecallURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=';

export const iconURL = 'https://openweathermap.org/img/wn/';

interface Coords {
   lat: number;
   lon: number;
}

export const getCurrentWeatherUrl = (city: string) => {
   return apiURL + city + '&appid=' + key + '&units=' + units;
};

export const fetchCurrentWeather = async <Type>(city: string) => {
   const data = await fetch(getCurrentWeatherUrl(city));
   return (await data.json()) as Type;
};

export const getForecastUrl = ({ lon, lat }: Coords) => {
   return onecallURL + lat + '&lon=' + lon + '&exclude=hourly,minutely&units=' + units + '&appid=' + key;
};
