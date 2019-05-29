import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  StripeProvider
} from 'react-stripe-elements';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StripeProvider apiKey="pk_test_QicERB8w3kyqaYW3hUUQylRH">
    <App />
  </StripeProvider>, document.getElementById('root'));

serviceWorker.unregister();
