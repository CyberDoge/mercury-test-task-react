import React from "react"
import "./InfoBlock.css"

export default class InfoBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="user-info central-block__content">
        <img alt="user icon" className="user-icon" src={this.props.userPhotoSrc}/>
        <div className="user-name">{this.props.userName}</div>
        <button className="btn-logout active-btn" onClick={()=>this.props.logout()}>
          Logout
        </button>
      </div>
    )
  }
}