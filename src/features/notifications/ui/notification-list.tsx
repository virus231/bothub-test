import { NotificationItem } from "./notification-item";
import type { Notification } from "@/features/notifications/types";

interface NotificationListProps {
  notifications: Notification[];
  onUpgrade: (notificationId: string) => void;
  isTransitioning?: boolean;
}

export const NotificationList = ({
  notifications,
  onUpgrade,
  isTransitioning = false,
}: NotificationListProps) => {
  return (
    <div className="divide-y divide-neutral-500 flex flex-col gap-4 px-6 ">
      {notifications.map((notification, index) => (
        <div
          key={notification.id}
          className={`transform transition-all duration-300 ease-out ${
            isTransitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
          style={{
            transitionDelay: isTransitioning ? "0ms" : `${index * 50}ms`,
          }}
        >
          <NotificationItem
            notification={notification}
            onUpgrade={() => onUpgrade(notification.id)}
          />
        </div>
      ))}
    </div>
  );
};
