import React from "react";
import "components/main/formHolder/formInputItem/FormInputItem.css";
import { classJoiner } from "../../../../service/ComponentService";

export default class FormInputItem extends React.Component {
  render() {
    const typeclass = classJoiner(this.props.typeclass);
    return (
      <input
        className={`form-holder__input-item ${typeclass}`}
        {...this.props}
      />
    );
  }
}
