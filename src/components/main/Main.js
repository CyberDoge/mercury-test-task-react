import React from "react";
import FormHolder from "./formHolder/FormHolder";
import "components/main/Main.css";
import CurrentUserInfo from "./currentUserInfo/CurrentUserInfo";

export default class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isLogin: false, userPhotoSrc: "", userName: "" };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    this.setState({ isLogin: false });
  }

  login(userName, userPhotoSrc) {
    this.setState({
      isLogin: true,
      userName: userName,
      userPhotoSrc: userPhotoSrc
    });
  }

  render() {
    return (
      <main className="main">
        {this.state.isLogin ? (
          <CurrentUserInfo
            userPhotoSrc={this.state.userPhotoSrc}
            userName={this.state.userName}
            logout={this.logout}
          />
        ) : (
          <FormHolder login={this.login} />
        )}
      </main>
    );
  }
}
