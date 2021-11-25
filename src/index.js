import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// **** (1) createStore 와 루트 리듀서 불러오기
import { createStore } from 'redux';
import rootReducer from './store/modules';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools);



ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
