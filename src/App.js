import React, { Component } from 'react';

import StripeForm from './StripeForm'
import {
  injectStripe,
  Elements
} from 'react-stripe-elements';

class App extends Component {
  render() {
    return (
      <>
        <Elements>
          <StripeForm />

        </Elements>
      </>
    );
  }

}

export default App;
