import { mergeProps, Show, For } from "solid-js";

export interface NavbarDropdownItemOptionsProps {
  title: string;
  link?: string;
  options?: NavbarDropdownItemOptionsProps[];
}

export interface NavbarDropdownItemProps {
  title: string;
  link?: string;
  options?: NavbarDropdownItemOptionsProps[];
}

function Item(props: NavbarDropdownItemOptionsProps) {
  const mergedProps = mergeProps({ options: [] }, props);
  return (
    <li
      classList={{
        "menu-item-has-children": mergedProps.options!.length > 0,
      }}
    >
      <a href={props.link} class="active bg-white text-dark hover:bg">
        {props.title}
      </a>

      <Show when={mergedProps.options.length > 0}>
        <ul class="submenu">
          <For each={props.options}>{(option) => <Item {...option} />}</For>
        </ul>
      </Show>
    </li>
  );
}

export function NavbarDropdownItem(props: NavbarDropdownItemProps) {
  const mergedProps = mergeProps({ options: [] }, props);
  return (
    <li>
      <a href={props.link}>{props.title}</a>

      <Show when={mergedProps.options.length > 0}>
        <ul class="submenu">
          <For each={props.options}>{(option) => <Item {...option} />}</For>
        </ul>
      </Show>
    </li>
  );
}
