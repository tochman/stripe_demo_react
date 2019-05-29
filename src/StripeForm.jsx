import React, { Component } from 'react';
import {
  injectStripe,
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from 'react-stripe-elements';

class StripeForm extends Component {
  state = {
    payed: false
  }
  async submitPayment() {
    let stripeRequest = await this.props.stripe.createToken()
    let token = stripeRequest.token
    // make a call to our api 
    // and submit the token (required) and some other data like
    // how much we want to charge the client
    this.setState({ payed: true })
  }
  render() {
    let display

    if (this.state.payed === true) {
      display = (
        <h1>Thank you</h1>
      )
    } else {
      display = (
        <>
          <label>
            Card number
                <CardNumberElement style={{ base: { fontSize: '12px' } }} />
          </label>
          <label>
            Expiry date
                <CardExpiryElement style={{ base: { fontSize: '12px' } }} />
          </label>
          <label>
            CVC
                <CardCVCElement style={{ base: { fontSize: '12px' } }} />
          </label>
          <button onClick={this.submitPayment.bind(this)} id="pay">Pay</button>
        </>
      )
    }
    return (
      <>
      { display }
      </>
    );
  }
}

export default injectStripe(StripeForm);