export type NotificationType = 'general' | 'price' | 'upgrade';

export interface CryptoInfo {
  name: string;
  icon: string;
}

export interface Notification {
  id: string;
  type: NotificationType;
  icon: string;
  title: string;
  description: string;
  timestamp: string;
  image?: string;
  price?: {
    amount: number;
    currency: string;
  };
  crypto?: CryptoInfo;
  hasUpgradeButton?: boolean;
  isRead: boolean;
}

export type TabType = 'inbox' | 'read';

export interface NotificationState {
  inbox: Notification[];
  read: Notification[];
  activeTab: TabType;
}