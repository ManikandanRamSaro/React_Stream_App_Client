import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './Components/App';
import reducer from './Reducers';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,document.querySelector("#root"));

