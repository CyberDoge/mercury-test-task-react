import React from "react";
import "components/centralBlock/formBlock/formInputItem/FormInputItem.css";

export default class FormInputItem extends React.Component {
  render() {
    return (
      <input
        className={`form__input-item ${this.props.typeClass}`}
        placeholder={this.props.placeholderValue}
        type={this.props.typeValue}
        onChange={this.props.changeEventHandler} //todo вынести в отдельный метод без пропса
      />
    );
  }
}
