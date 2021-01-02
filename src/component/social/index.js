import React, { Component } from "react";

//Components
// import FacebookLogin from './FacebookLogin/'
import GoogleLogin from "./google/google";
import loginGo from "./google/loginGo";
// import LinkedinLogin from './LinkedinLogin/'

//import config from '../../../config';

class Social extends Component {
  render() {
    return (
      <div>
        <h2>Facebook, Google and LinkedIn login with ReactJs</h2>
        <p>
          {/* <FacebookLogin /> */}
          <GoogleLogin />
          <loginGo />

          {/* <LinkedinLogin /> */}
        </p>
      </div>
    );
  }
}

export default Social;
