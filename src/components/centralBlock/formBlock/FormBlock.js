import React from "react";
import FormInputItem from "./formInputItem/FormInputItem";
import "components/centralBlock/formBlock/FormBlock.css";
import RequestService from "../../../service/RequestService";

export default class FormBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {email: "", password: ""};
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestService = new RequestService("us-central1-mercdev-academy.cloudfunctions.net", false)
  }

  handleEmailChange(event) {
    const emailValue = event.target.value;
    this.setState({email: emailValue});
  }

  handlePasswordChange(event) {
    const passwordValue = event.target.value;
    this.setState({password: passwordValue});
  }

  showError() {
    this.setState({wrongPassword: true});
  }

  login(username, photoUrl) {
    this.setState({wrongPassword: false});
    this.props.login(username, photoUrl);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.requestService.postRequest("login", {
      email: this.state.email,
      password: this.state.password
    }, (response) => {
      this.login(response.name, response.photoUrl);
    }, (error) => {
      this.showError();
    })
  }

  render() {
    const classesForDivWrong = this.state.wrongPassword ? "last" : "hide";
    const classesForPasswordInput = this.state.wrongPassword ? "" : "last";
    return (
      <form
        className="form central-block__content"
        onSubmit={this.handleSubmit}
      >
        <div className="form__element form__title">Log In</div>
        <div className="form__element form__input_content-div">
          <FormInputItem
            typeclass="form__input_email"
            placeholder="E-Mail"
            type="email"
            onChange={this.handleEmailChange}
          />
          <FormInputItem
            typeclass={`"form__input_password ${classesForPasswordInput}"`}
            placeholder="Password"
            type="password"
            onChange={this.handlePasswordChange}
          />
          <div className={`form__input-item form__invalid-email ${classesForDivWrong}`}>
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
