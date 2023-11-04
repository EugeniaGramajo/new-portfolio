import { createStore, combineReducers } from 'redux';
import  weatherReducer  from './weather/weather_reducer';

const rootReducer = combineReducers({
  weatherStore: weatherReducer,
  // ... Otros reducers si los tienes
});

export type RootState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
