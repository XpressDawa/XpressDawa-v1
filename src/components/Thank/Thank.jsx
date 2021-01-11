import React, { Component } from "react";
import "./Thank.css";
// https://codepen.io/YinkaEnoch/pen/PxqrZV
class Thank extends Component {
  render() {
    return (
      <>
      <div class="jumbotron text-center">
      <h6 class="display-4">Thank You for Ordering!</h6>
      <p class="lead"><strong>Your order id is : ?genr id?</strong> Our executive will Contact you on ?given number?</p>
      <hr/>
      <p>
        Having trouble? <a href="">Contact us</a>
      </p>
      <p class="lead">
        <a class="btn btn-primary btn-sm" href="https://bootstrapcreative.com/" role="button">Continue to homepage</a>
      </p>
    </div>
      </>
    );
  }
}
export default Thank;
// for further instructions on how to complete your account setup.