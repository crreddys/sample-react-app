import React, { Component } from "react";
import { GoogleLogout } from "react-google-login";

export default class Logout extends Component<any> {
  clientId =
    "633988702730-6afd7umk28bi2ftbhgl4em7rdjf01ulj.apps.googleusercontent.com";

  onSuccess = () => {
    this.props.onLogoutSuccess(true);
    console.log("[Logout Success]");
  };

  render() {
    return (
      <div>
        <GoogleLogout
          clientId={this.clientId}
          buttonText="Logout"
          onLogoutSuccess={this.onSuccess}
        ></GoogleLogout>
      </div>
    );
  }
}
