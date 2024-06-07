import { JSXElement } from "solid-js";

import "./Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  class?: string;
}

export function Button(props: ButtonProps): JSXElement {
  return (
    <button onClick={props.onClick} class={props.class + " button"}>
      {props.text}
    </button>
  );
}
