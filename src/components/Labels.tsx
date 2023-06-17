import React from "react";
import { numAspects } from "../utils";

export default function Labels(): React.JSX.Element {
  const labels = [];

  for (let i = 1; i <= numAspects; i++) {
    labels.push(<label key={i}>Assessment aspect {i}</label>);
  }

  return <React.Fragment>{labels}</React.Fragment>;
}
