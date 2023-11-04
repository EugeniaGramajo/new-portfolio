import { env } from "@/env.config";
import axios from "axios";
import { error } from "console";

type weather = {
  location: {
    city: string;
    country: string;
    localtime: string;
  };
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
  };
  weather: {
    max: string;
    min: string;
    current: string;
    image: string;
    today:string;
  };
};

export const getLocation = async (): Promise<{ latitude: number; longitude: number }> => {
  return new Promise((resolve) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          resolve({ latitude: -32.9908601, longitude: -58.0640772 }); 
        }
      );
    } else {
      resolve({ latitude: -32.9908601, longitude: -58.0640772 }); 
    }
  });
};

export const fetchWeatherData = async (): Promise<weather> => {
  try {
    const { latitude, longitude } = await getLocation();
    const lat = `${latitude},${longitude}`;
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${env.weather_api_key}&q=${lat}`;
    const response = await axios.get(url);
    const data = response.data;

    return {
      location: {
        city: data.location.name,
        country: data.location.country,
        localtime: data.location.localtime,
      },
      astro: {
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
        moonrise: data.forecast.forecastday[0].astro.moonrise,
        moonset: data.forecast.forecastday[0].astro.moonset,
      },
      weather: {
        max: data.forecast.forecastday[0].maxtemp_c,
        min: data.forecast.forecastday[0].mintemp_c,
        current: data.current.temp_c,
        image: "http:"+data.current.condition.icon,
        today: data.current.condition.text,
      },
    };
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener datos del clima");
  }
};

