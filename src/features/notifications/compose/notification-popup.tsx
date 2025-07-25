import { useNotification } from "@/features/notifications/model/use-notification";
import { NotificationHeader } from "@/features/notifications/ui/notification-header";
import { NotificationContent } from "@/features/notifications/ui/notification-content";
import { NotificationActions } from "@/features/notifications/ui/notification-actions";

export const NotificationPopup = () => {
  const {
    state,
    currentNotifications,
    showActionButton,
    showClearButton,
    segmentOptions,
    isTransitioning,
    handleTabChange,
    handleMarkAllAsRead,
    handleClearAll,
    handleUpgrade,
  } = useNotification();

  return (
    <div className="w-96 bg-neutral-800 rounded-xl shadow-lg border border-neutral-500 overflow-hidden">
      <NotificationHeader
        segmentOptions={segmentOptions}
        activeTab={state.activeTab}
        onTabChange={handleTabChange}
        inboxCount={state.inbox.length}
        readCount={state.read.length}
      />

      <NotificationContent
        notifications={currentNotifications}
        activeTab={state.activeTab}
        onUpgrade={handleUpgrade}
        isTransitioning={isTransitioning}
      />

      <NotificationActions
        showActionButton={showActionButton}
        showClearButton={showClearButton}
        onMarkAllAsRead={handleMarkAllAsRead}
        onClearAll={handleClearAll}
      />
    </div>
  );
};
