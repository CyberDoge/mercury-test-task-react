import React from "react";
import FormBlock from "./formBlock/FormBlock";
import "components/centralBlock/CentralBlock.css";
import InfoBlock from "./InfoBlock/InfoBlock";

export default class CentralBlock extends React.Component {
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
      <div className="central-block">
        {this.state.isLogin ? (
          <InfoBlock
            userPhotoSrc={this.state.userPhotoSrc}
            userName={this.state.userName}
            logout={this.logout}
          />
        ) : (
          <FormBlock login={this.login} />
        )}
      </div>
    );
  }
}
