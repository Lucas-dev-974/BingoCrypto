import { JSXElement, mergeProps } from "solid-js";

import "./ButtonIcon.css";

interface ButtonIconProps {
  onClick: () => void;
  class?: string;
  dark?: boolean;
  type?: "primary" | "borderless";
  icon: JSXElement;
}

export function ButtonIcon(props: ButtonIconProps): JSXElement {
  const mergedProps = mergeProps({ type: "primary", class: "" }, props);

  return (
    <button onClick={props.onClick} class={mergedProps.class + " button-icon"}>
      {props.icon}
    </button>
  );
}
