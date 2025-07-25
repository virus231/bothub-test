import { useState, useMemo } from "react";
import { mockNotifications } from "@/features/notifications/data";
import type { NotificationState, TabType } from "@/features/notifications/types";

export const useNotification = () => {
  const [state, setState] = useState<NotificationState>({
    inbox: mockNotifications,
    read: [mockNotifications[0]],
    activeTab: "inbox",
  });
  
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (tab: TabType) => {
    if (tab === state.activeTab) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setState((prev) => ({ ...prev, activeTab: tab }));
      setTimeout(() => setIsTransitioning(false), 50);
    }, 150);
  };

  const handleMarkAllAsRead = () => {
    setState((prev) => ({
      inbox: [],
      read: [...prev.read, ...prev.inbox.map((n) => ({ ...n, isRead: true }))],
      activeTab: prev.activeTab,
    }));
  };

  const handleClearAll = () => {
    setState((prev) => ({
      ...prev,
      read: [],
    }));
  };

  const handleUpgrade = (notificationId: string) => {
    console.log("Upgrade clicked for notification:", notificationId);
  };

  const currentNotifications = useMemo(() => 
    state.activeTab === "inbox" ? state.inbox : state.read,
    [state.activeTab, state.inbox, state.read]
  );

  const showActionButton = useMemo(() => 
    state.activeTab === "inbox" && state.inbox.length > 0,
    [state.activeTab, state.inbox.length]
  );

  const showClearButton = useMemo(() => 
    state.activeTab === "read" && state.read.length > 0,
    [state.activeTab, state.read.length]
  );

  const segmentOptions = useMemo(() => [
    { id: "inbox", label: "Inbox", value: "inbox" as TabType },
    { id: "read", label: "Read", value: "read" as TabType },
  ], []);

  return {
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
  };
};