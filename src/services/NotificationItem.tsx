import { createSignal, mergeProps } from "solid-js";
import { ButtonIcon } from "../components/buttons/icon-button/ButtonIcon";
import { CloseIcon } from "../icons/CloseIton";
import { NotificationType } from "./Notification";

import "./Notification.css";

export function NotificationItems(notif: NotificationType) {
  const mergedProps = mergeProps({ type: "info" }, notif);

  const [notifItemRef, setRef] = createSignal<HTMLDivElement>(
    document.createElement("div")
  );

  function close() {
    notifItemRef().remove();
  }

  return (
    <div
      ref={setRef}
      class="notification-item"
      classList={{
        "notif-info": mergedProps.type == "info",
        "notif-error": mergedProps.type == "error",
      }}
    >
      <p>{notif.content}</p>

      <ButtonIcon
        class="w-[14px]"
        icon={
          <span class="close-icon">
            <CloseIcon />
          </span>
        }
        onClick={close}
      />
    </div>
  );
}
