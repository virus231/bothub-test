import type { TabType } from "@/features/notifications/types";
import { cn } from "@/utils/cn";
import React from "react";

interface SegmentControlProps {
  activeTab: TabType;
  options: {
    id: string;
    label: string;
    value: TabType;
  }[];
  onTabChange: (tab: TabType) => void;
  inboxCount: number;
  readCount: number;
  className?: string;
}

export const SegmentControl: React.FC<SegmentControlProps> = ({
  activeTab,
  onTabChange,
  options,
  className,
  inboxCount,
  readCount,
}) => {
  const activeIndex = options.findIndex((option) => option.value === activeTab);
  const totalTabs = options.length;

  const getIndicatorPosition = () => {
    if (totalTabs === 0 || activeIndex === -1) {
      return {
        left: "0%",
        width: "0%",
      };
    }

    const widthPercent = 100 / totalTabs;
    const leftPercent = activeIndex * widthPercent;

    return {
      left: `${leftPercent}%`,
      width: `${widthPercent}%`,
    };
  };

  const position = getIndicatorPosition();

  return (
    <div className={cn("inline-block w-full", className)}>
      <div className="relative flex bg-transparent rounded-lg shadow-sm border border-neutral-500 p-1 text-sm">
        <div
          className={cn(
            "absolute top-1 bottom-1 rounded-[6px] bg-accent-500",
            "transition-all duration-200 ease-in-out"
          )}
          style={{
            ...position,
            margin: "0 2px",
            left: `calc(${position.left} + 2px)`,
            width: `calc(${position.width} - 4px)`,
          }}
        />

        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onTabChange(option.value)}
            className={cn(
              "flex-1 relative z-10 flex items-center justify-center text-xs font-medium rounded-[6px] py-2 px-0",
              "transition-colors duration-200 ease-in-out cursor-pointer",
              activeTab === option.value
                ? "text-neutral-700"
                : "text-neutral-100 hover:text-neutral-50"
            )}
          >
            {option.label} ({option.value === "inbox" ? inboxCount : readCount})
          </button>
        ))}
      </div>
    </div>
  );
};
