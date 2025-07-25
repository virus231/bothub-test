import type { Notification } from "@/features/notifications/types";
import { AnimatedTransition } from "./animated-transition";
import { EmptyState } from "./empty-state";
import { NotificationList } from "./notification-list";

interface NotificationContentProps {
  notifications: Notification[];
  activeTab: "inbox" | "read";
  onUpgrade: (notificationId: string) => void;
  isTransitioning?: boolean;
}

export const NotificationContent = ({
  notifications,
  activeTab,
  onUpgrade,
  isTransitioning = false,
}: NotificationContentProps) => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-h-96 overflow-y-auto">
        <AnimatedTransition isTransitioning={isTransitioning}>
          {notifications.length > 0 ? (
            <NotificationList
              notifications={notifications}
              onUpgrade={onUpgrade}
              isTransitioning={isTransitioning}
            />
          ) : (
            <EmptyState activeTab={activeTab} />
          )}
        </AnimatedTransition>
      </div>
    </div>
  );
};
