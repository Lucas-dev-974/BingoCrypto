import { JSXElement, createSignal } from "solid-js";
import { DiamondIcon } from "../../icons/Diamond";

import "./TimelineItem.css";
import { TimelineDialog } from "./TimelineDialog";

interface TimelineItemProps {
  date: string;
  title: string;
  content: string;
}

export function TimelineItem(props: TimelineItemProps): JSXElement {
  const [dialog, setDialog] = createSignal<boolean>(false);

  return (
    <div
      class="timeline-item cursor-pointer"
      onClick={() => setDialog((prev) => !prev)}
    >
      <p class="timeline-date">{props.date}</p>
      <div class="timeline-diamond">
        <DiamondIcon class={dialog() ? "diamond-active" : "diamond-blink"} />
        <div class="timeline-line " />
      </div>
      <p class="timeline-title">{props.title}</p>
      <TimelineDialog show={dialog()} />
    </div>
  );
}
