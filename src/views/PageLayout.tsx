import { JSXElement, children } from "solid-js";

interface PageLayoutProps {
  children: JSXElement;
}

export function PageLayout(props: PageLayoutProps): JSXElement {
  const child = children(() => props.children);

  return <div class="page-layout">{child()}</div>;
}
