import { Dispatch } from 'redux';
import axios from 'axios';
import { env } from '@/env.config';

export const SET_WEATHER = 'SET_WEATHER';

export interface SetWeatherAction {
  type: typeof SET_WEATHER;
  payload: object;
}

export type WeatherActionTypes = SetWeatherAction;

export const setWeather = (response: object): SetWeatherAction => ({
  type: SET_WEATHER,
  payload: response,
});

export const fetchWeather = (data: string) => {
  return async (dispatch: Dispatch<WeatherActionTypes>) => {
    try {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=${env.weather_api_key}&q=${data}`;
      const response = await axios.get(url);
      dispatch(setWeather(response.data));  
    } catch (error) {
      console.error(error);
    }
  };
};
