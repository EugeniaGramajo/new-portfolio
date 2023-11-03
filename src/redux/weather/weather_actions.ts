export const SET_WEATHER = 'SET_WEATHER';

export interface SetWeatherAction {
  type: typeof SET_WEATHER;
  payload: object;
}

export type WeatherActionTypes = SetWeatherAction;

export const setWeather = (weather: object): SetWeatherAction => ({
  type: SET_WEATHER,
  payload: weather,
});