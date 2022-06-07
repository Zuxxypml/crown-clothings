import React from "react";
import StripeCheckout from "react-stripe-checkout";

function StripeButton({ price }) {
  const stripePrice = parseInt(price) * 100;
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  const PB_KEY =
    "pk_test_51L7laOCF1zmV5CtZsmdUBCLv7PBw3GwZ5EkrwY3NjM8Tr1V7HzK5nJ0SbiM27v2EHM5ORTzjdKLserju7BGtV1kS00zwFVNQ0a";
  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="Crown Clothings"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total is $${price}`}
        amount={stripePrice}
        panelLabel="Pay now"
        token={onToken}
        stripeKey={PB_KEY}
      />
    </div>
  );
}

export default StripeButton;
