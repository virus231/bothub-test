import { Icon } from "@/shared/ui/icon";

interface NotificationActionsProps {
  showActionButton: boolean;
  showClearButton: boolean;
  onMarkAllAsRead: () => void;
  onClearAll: () => void;
}

export const NotificationActions = ({
  showActionButton,
  showClearButton,
  onMarkAllAsRead,
  onClearAll,
}: NotificationActionsProps) => {
  return (
    <div className="w-full py-2 hover:bg-neutral-500 transition-colors duration-200">
      {showActionButton && (
        <div
          onClick={onMarkAllAsRead}
          className="flex items-center justify-center gap-2 w-full text-accent-500 text-md font-medium transition-colors duration-200 cursor-pointer "
        >
          <Icon name="mark_chat_read" size={20} />
          Mark all as read
        </div>
      )}

      {showClearButton && (
        <div
          onClick={onClearAll}
          className="flex items-center justify-center gap-2 w-full text-neutral-50 text-md font-medium transition-colors duration-200 cursor-pointer "
        >
          <Icon name="clear_all" size={20} className="text-neutral-50" />
          Clear all
        </div>
      )}
    </div>
  );
};
