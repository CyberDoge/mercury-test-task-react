import React from "react";
import "components/centralBlock/formBlock/formInputItem/FormInputItem.css";
import ComponentService from "../../../../service/ComponentService";

export default class FormInputItem extends React.Component {
  render() {
    const typeClass = ComponentService.classJoiner(this.props.typeClass)
    return (
      <input
        className={`form__input-item ${typeClass}`}
        {...this.props}
      />
    );
  }
}
