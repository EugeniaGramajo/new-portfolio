import { SET_WEATHER, WeatherActionTypes } from "./weather_actions";

interface WeatherState {
  weather: object | null;
}

const initialState: WeatherState = {
  weather: null,
};

const weatherReducer = (
  state = initialState,
  action: WeatherActionTypes
): WeatherState => {
  switch (action.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
