import React from 'react';

import { StripeProvider, Elements, CardElement } from 'react-stripe-elements';


function App() {
  return (
    <>
      <StripeProvider apiKey="pk_test_QicERB8w3kyqaYW3hUUQylRH">
        <Elements>
          <label>
            Card details
            <CardElement style={{ base: { fontSize: '12px' } }} />
          </label>


        </Elements>
      </StripeProvider>
    </>
  );
}

export default App;
