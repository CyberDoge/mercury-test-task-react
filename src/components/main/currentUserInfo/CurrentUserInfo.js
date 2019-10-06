import React from "react";
import "./CurrentUserInfo.css";

export default class CurrentUserInfo extends React.Component {
  render() {
    return (
      <div className="current-user-info main__content">
        <img
          alt="user icon"
          className="current-user-info__user-icon"
          src={this.props.userPhotoSrc}
        />
        <div className="current-user-info__user-name">
          {this.props.userName}
        </div>
        <button
          className="current-user-info__btn-logout active-btn"
          onClick={() => this.props.logout()}
        >
          Logout
        </button>
      </div>
    );
  }
}
