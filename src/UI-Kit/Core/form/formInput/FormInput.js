import React from "react";
import "UI-Kit/Core/form/formInput/FormInput.css";
import { classJoiner, mutablePropsCopy } from "../../../../service/ComponentService";

export default class FormInput extends React.Component {
  constructor(props, context) {
    //todo подмать как использовать
    super(props, context);
    const mutableProps = mutablePropsCopy(props);
    mutableProps.className = classJoiner()
  }
  render() {
    return (
      <input {...this.props} />
    );
  }
}
