import React, { Component } from "react";
import ImageForm from "./ImageForm";
import Login from "./Login";
import Logout from "./Logout";

export default class Home extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  onLogIn = (res: any) => {
    this.setState({ isLoggedIn: true });

    console.log("[Login Success] res:", res);
  };

  onLogOut = (res: any) => {
    this.setState({ isLoggedIn: false });

    console.log("[Logout Success] res:", res);
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        <header>Sample Test App</header>
        <br></br>
        {!isLoggedIn ? (
          <Login onLoginSuccess={this.onLogIn} />
        ) : (
          <div>
            <Logout onLogoutSuccess={this.onLogOut} />
            <ImageForm />
          </div>
        )}
      </div>
    );
  }
}
