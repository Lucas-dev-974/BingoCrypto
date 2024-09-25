import { JSXElement, mergeProps } from "solid-js";

import "./Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  class?: string;
}

export function Button(props: ButtonProps): JSXElement {
  return (
    <button onClick={props.onClick} class={"default-button " + props.class}>
      <span>{props.text}</span>
    </button>
  );
}
