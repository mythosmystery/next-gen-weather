type WeatherIcon = {
   description: string;
   icon: string;
   id: number;
   main: string;
}[];

export type CoordQueryData = {
   base: string;
   clouds: {};
   cod: number;
   coord: {
      lat: number;
      lon: number;
   };
   dt: number;
   id: number;
   main: {
      feels_like: number;
      humidiity: number;
      pressure: number;
      temp: number;
      temp_max: number;
      temp_min: number;
   };
   name: string;
   sys: {
      country: string;
      id: number;
      sunrise: number;
      sunset: number;
      type: number;
   };
   timezone: number;
   visibility: number;
   weather: {}[];
   wind: {};
};

export type CurrentWeatherType = {
   clouds: number;
   dew_point: number;
   dt: number;
   feels_like: number;
   humidity: number;
   pressure: number;
   sunrise: number;
   sunset: number;
   temp: number;
   uvi: number;
   visibility: number;
   weather: WeatherIcon;
   wind_deg: number;
   wind_gust: number;
   wind_speed: number;
};

export type DailyWeatherType = {
   clouds: number;
   dt: number;
   feels_like: {
      day: number;
      night: number;
      eve: number;
      morn: number;
   };
   humidity: number;
   moon_phase: number;
   moonrise: number;
   moonset: number;
   pop: number;
   pressure: number;
   rain: number;
   sunrise: number;
   sunset: number;
   temp: {
      day: number;
      night: number;
      min: number;
      max: number;
      morn: number;
      eve: number;
   };
   uvi: number;
   weather: WeatherIcon;
   wind_deg: number;
   wind_gust: number;
   wind_speed: number;
};

export type ForecastType = {
   alerts: {
      description: string;
      end: number;
      event: string;
      sender_name: string;
      start: number;
      tags: string[];
   }[];
   current: CurrentWeatherType;
   daily: DailyWeatherType[];
   lat: number;
   lon: number;
   timezone: string;
   timezone_offset: number;
};
