import thunk from 'redux-thunk';
import holderReducer from './Holder';
import {composeWithDevTools} from 'redux-devtools-extension';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(holderReducer, composedEnhancer);
export default store;
