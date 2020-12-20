import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

export default class Login extends Component<any> {
  clientId =
    "633988702730-6afd7umk28bi2ftbhgl4em7rdjf01ulj.apps.googleusercontent.com";

  onSuccess = (res: any) => {
    this.props.onLoginSuccess(true);
    console.log("[Login Success] res:", res);
  };

  onFailure = (res: any) => {
    console.log("[Login Failed] res:", res);
  };

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={this.clientId}
          buttonText="Login"
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      </div>
    );
  }
}
