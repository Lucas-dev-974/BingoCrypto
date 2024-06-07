import { JSXElement, mergeProps } from "solid-js";

interface Text2Props {
  text: string;
  hideOnMobile?: boolean;
}

export function Text2(props: Text2Props): JSXElement {
  const mergedProps = mergeProps({ hideOnMobile: false }, props);

  return (
    <h2
      class="text-3xl text-white"
      classList={{
        "hidden sm:block": mergedProps.hideOnMobile,
      }}
    >
      {props.text}
    </h2>
  );
}
