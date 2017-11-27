import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reduxs'
import 'antd/dist/antd.css'
import './styles/App.css'
import {getAllProducts} from './actions'
import Main from './components/Main';

const middleware = [ thunk ]
if(process.env.NODE_ENV !== 'production'){
  middleware.push(createLogger())
}
const store = createStore(reducer,
  applyMiddleware(...middleware)
  )
store.dispatch(getAllProducts())
// Render the main component into the dom
ReactDOM.render(<Provider store={store}>
  <Main/>
</Provider>, document.getElementById('app'));
