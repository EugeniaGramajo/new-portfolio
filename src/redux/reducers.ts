import { combineReducers } from 'redux';
import weatherReducer from './weather/weather_reducer';

const rootReducer = combineReducers({
  weather: weatherReducer
  // Otros reducers aquí si los tienes
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;