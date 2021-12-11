import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/root/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import configureStore from './redux/reducers/configureStore';
import {BrowserRouter} from 'react-router-dom';
import 'alertifyjs/build/css/alertify.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>    
    <Provider store={configureStore()}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
