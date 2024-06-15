import { JSXElement, mergeProps } from "solid-js";

interface Text2Props {
  text: string;
  hideOnMobile?: boolean;
  dark?: boolean;
}

export function Text2(props: Text2Props): JSXElement {
  const mergedProps = mergeProps({ hideOnMobile: false, dark: false }, props);

  return (
    <h2
      class="text-3xl"
      classList={{
        "hidden sm:block": mergedProps.hideOnMobile,
        "text-white": !mergedProps.dark,
        "text-dark": mergedProps.dark,
      }}
    >
      {props.text}
    </h2>
  );
}
