import React from "react";
import FormInput from "../../../UI-Kit/Core/form/formInput/FormInput";
import "components/centralBlock/formBlock/FormBlock.css";
import RequestService from "../../../service/RequestService";
import Form  from "UI-Kit/Core/form/Form";

export default class FormBlock extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { email: "", password: "" };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.requestService = new RequestService(
      "us-central1-mercdev-academy.cloudfunctions.net",
      false
    );
  }

  handleEmailChange(event) {
    const emailValue = event.target.value;
    this.setState({ email: emailValue });
  }

  handlePasswordChange(event) {
    const passwordValue = event.target.value;
    this.setState({ password: passwordValue });
  }

  showError() {
    this.setState({ wrongPassword: true });
  }

  login(username, photoUrl) {
    this.setState({ wrongPassword: false });
    this.props.login(username, photoUrl);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.requestService.postRequest(
      "login",
      {
        email: this.state.email,
        password: this.state.password
      },
      response => {
        this.login(response.name, response.photoUrl);
      },
      error => {
        this.showError();
      }
    );
  }

  render() {
    const classesForDivWrong = this.state.wrongPassword ? "last" : "hide";
    const classesForPasswordInput = this.state.wrongPassword ? "" : "last";
    return (
      <Form
        className="form central-block__content"
        onSubmit={this.handleSubmit}
      >
        <div className="form__element form__title">Log In</div>
        <div className="form__element form__input_content-div">
          <FormInput
            className="form__input-item form__input_email"
            placeholder="E-Mail"
            type="email"
            onChange={this.handleEmailChange}
          />
          <FormInput
            className={`"form__input_password form__input-item ${classesForPasswordInput}"`}
            placeholder="Password"
            type="password"
            onChange={this.handlePasswordChange}
          />
          <div
            className={`form__input-item form__invalid-email ${classesForDivWrong}`}
          >
            E-Mail or password is incorrect
          </div>
        </div>
        <FormInput
          className="form__element form__submit active-btn"
          type="submit"
          value="Login"
        />
      </Form>
    );
  }
}
