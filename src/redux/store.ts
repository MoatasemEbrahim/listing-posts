import rootReducer from './reducers';
import {createStore, applyMiddleware, compose} from 'redux'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()))

export default store;