import React from "react";
import FormInputItem from "./formInputItem/FormInputItem";
import 'components/centralBlock/formBlock/FormBlock.css'

export default class FormBlock extends React.Component {
  render() {
    return (
      <form className="form central-block__content">
        <div className="form__element form__title">Log In</div>
        <div className="form__element form__input_content-div">
          <FormInputItem
            typeClass="form__input_email"
            placeholderValue="E-Mail"
            typeValue="email"
          />
          <FormInputItem
            typeClass="form__input_password last"
            placeholderValue="Password"
            typeValue="password"
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
