import React from "react";
import { mutablePropsCopy } from "../../../service/ComponentService";

export default function Form(props) {
  const mutatedProps = mutablePropsCopy(props);
  return <form {...mutatedProps}>{mutatedProps.children}</form>;
}
