import { Icon } from "@/components";
import type { TabType } from "@/features/notifications/types";

interface EmptyStateProps {
  activeTab: TabType;
}

export const EmptyState = ({ activeTab }: EmptyStateProps) => {
  return (
    <div className="p-8 text-center">
      <div className="text-gray-400 mb-2">
        <Icon
          name={activeTab === "inbox" ? "inbox" : "mark_email_read"}
          size={24}
          className="text-neutral-50"
        />
      </div>
      <p className="text-gray-500 text-sm">
        {activeTab === "inbox"
          ? "No new notifications"
          : "No read notifications"}
      </p>
    </div>
  );
};
