import React from "react";
import "components/centralBlock/formBlock/formInputItem/FormInputItem.css";
import classJoiner from "../../../../service/ComponentService";

export default class FormInputItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.typeClass = classJoiner(this.props.typeClass);
  }
  render() {
    return (
      <input
        className={`form__input-item ${this.typeClass}`}
        {...this.props}
      />
    );
  }
}
