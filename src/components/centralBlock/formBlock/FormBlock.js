import React from "react";
import FormInputItem from "./formInputItem/FormInputItem";
import "components/centralBlock/formBlock/FormBlock.css";

export default class FormBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { email: "", password: "" };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleEmailChange(event) {
    const emailValue = event.target.value;
    this.setState({ email: emailValue });
  }

  handlePasswordChange(event) {
    const passwordValue = event.target.value;
    this.setState({ password: passwordValue });
  }

  render() {
    return (
      <form className="form central-block__content">
        <div className="form__element form__title">Log In</div>
        <div className="form__element form__input_content-div">
          <FormInputItem
            typeClass="form__input_email"
            placeholder="E-Mail"
            type="email"
            onChange={this.handleEmailChange}
          />
          <FormInputItem
            typeClass="form__input_password last"
            placeholder="Password"
            type="password"
            onChange={this.handlePasswordChange}
          />
          <div className="form__input-item form__invalid-email hide">
            E-Mail or password is incorrect
          </div>
        </div>
        <input
          className="form__element form__submit active-btn"
          type="submit"
          value="Login"
        />
      </form>
    );
  }
}
