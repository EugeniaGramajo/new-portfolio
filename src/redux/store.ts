import { createStore } from 'redux';
import rootReducer from './reducers';
import { RootState } from './reducers';

const store = createStore(rootReducer);

export default store;