import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { rootReducer } from './rootReducer'

const middlewares = [thunk];

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));
