import { For, createSignal } from "solid-js";
import { NotificationItems } from "./NotificationItem";

export type NotificationType = {
  content: string;
  type: "info" | "error";
};

const [notifications, setNotifications] = createSignal<NotificationType[]>([]);

export function pushNotif(notif: NotificationType) {
  setNotifications((prev) => [...prev, notif]);
}

export function Notifications() {
  return (
    <For each={notifications()}>
      {(notif) => <NotificationItems {...notif} />}
    </For>
  );
}
