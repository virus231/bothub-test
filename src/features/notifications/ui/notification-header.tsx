import { Icon } from "@/components";
import type { TabType } from "@/features/notifications/types";
import { SegmentControl } from "./segment-control";

interface NotificationHeaderProps {
  segmentOptions: Array<{ id: string; label: string; value: TabType }>;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  inboxCount: number;
  readCount: number;
}

export const NotificationHeader = ({
  segmentOptions,
  activeTab,
  onTabChange,
  inboxCount,
  readCount,
}: NotificationHeaderProps) => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-semibold text-neutral-white-100">
          Notifications
        </h2>

        <Icon
          name="close"
          size={24}
          className="text-neutral-50 hover:text-neutral-100 transition-colors duration-200 cursor-pointer"
        />
      </div>

      <SegmentControl
        options={segmentOptions}
        activeTab={activeTab}
        onTabChange={onTabChange}
        inboxCount={inboxCount}
        readCount={readCount}
      />

      <div className="h-[1px] mt-4 mb-0 bg-neutral-500 w-full" />
    </div>
  );
};
