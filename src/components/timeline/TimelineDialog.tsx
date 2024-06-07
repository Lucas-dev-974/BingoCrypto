import { Show } from "solid-js";

interface TimelineDialogProps {
  show: boolean;
}

export function TimelineDialog(props: TimelineDialogProps) {
  return (
    <div
      class="bg-white px-2 absolute left-10 ease-in duration-150"
      classList={{
        "opacity-0": !props.show,
      }}
    >
      dzezde
    </div>
  );
}
