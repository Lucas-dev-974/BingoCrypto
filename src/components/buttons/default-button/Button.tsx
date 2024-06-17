import { JSXElement, mergeProps } from "solid-js";

import "./Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  class?: string;
  dark?: boolean;
  type?: "primary" | "borderless";
}

export function Button(props: ButtonProps): JSXElement {
  const mergedProps = mergeProps({ type: "primary", class: "" }, props);
  return (
    <button
      onClick={props.onClick}
      class={mergedProps.class + " button btn-" + mergedProps.type}
      classList={{
        "text-white": !props.dark,
        "text-dark": props.dark,
      }}
    >
      {props.text}
    </button>
  );
}
