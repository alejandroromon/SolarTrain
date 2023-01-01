import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const Payment = () => {

    const onToken = (token) => {
        console.log(token);
    }

    return (
<div>
<StripeCheckout
        token={onToken}
        stripeKey="pk_test_51MKnG5Fqxa12Swol6eE8OD2HoJB54vOjyv3lFPSXV44p0rFPGb4fu3gXgp6thyXhPacfbJbvVhRHVmdPLYYAokxM00ZCx71tBb"
        currency="EUR"
        amount="10000"
        name="Paying Journey"
      >
        <button className="btn btn-primary">Pay Journey</button>
        </StripeCheckout>
</div>
    );
};

export default Payment;