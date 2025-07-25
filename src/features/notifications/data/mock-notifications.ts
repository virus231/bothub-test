import bgNotify from "@/assets/bg-notify.png";
import bitcoinIcon from "@/assets/bitcoin.svg";
import type { Notification } from "@/features/notifications/types/notifications";

export const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "upgrade",
    icon: "star",
    image: bgNotify,
    title: "Trial: Trader Plan",
    description:
      "Your trial period is ending soon. Upgrade to continue enjoying premium features and advanced analytics.",
    timestamp: "6 hours ago",
    hasUpgradeButton: true,
    isRead: false,
  },
  {
    id: "2",
    type: "price",
    icon: "trending_up",
    title: "Bitcoin Price Alert",
    description:
      "Bitcoin has reached your target price. Consider your trading strategy.",
    timestamp: "Yesterday",
    price: {
      amount: 123000.0,
      currency: "USD",
    },
    crypto: {
      name: "Bitcoin",
      icon: bitcoinIcon,
    },
    isRead: false,
  },
  {
    id: "3",
    type: "general",
    icon: "notifications",
    title: "System Maintenance",
    description:
      "Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM EST. Some features may be temporarily unavailable during this time.",
    timestamp: "2 days ago",
    isRead: false,
  },
  {
    id: "4",
    type: "general",
    icon: "security",
    title: "Security Update",
    description:
      "We have updated our security protocols to better protect your account. No action is required from you.",
    timestamp: "3 days ago",
    image: bgNotify,
    isRead: false,
  },
  {
    id: "5",
    type: "price",
    icon: "currency_exchange",
    title: "Ethereum Price Movement",
    description:
      "Ethereum has experienced significant movement in the last 24 hours.",
    timestamp: "1 week ago",
    price: {
      amount: 2850.5,
      currency: "USD",
    },
    crypto: {
      name: "Ethereum",
      icon: bitcoinIcon,
    },
    isRead: false,
  },
  {
    id: "6",
    type: "upgrade",
    icon: "workspace_premium",
    title: "Premium Features Available",
    description:
      "Unlock advanced charting tools, real-time alerts, and portfolio analytics with our Premium plan.",
    timestamp: "1 week ago",
    hasUpgradeButton: true,
    isRead: false,
  },
  {
    id: "7",
    type: "price",
    icon: "currency_exchange",
    title: "Dogecoin Alert",
    description: "Dogecoin has shown remarkable growth today.",
    timestamp: "1 week ago",
    price: {
      amount: 0.85,
      currency: "USD",
    },
    crypto: {
      name: "Dogecoin",
      icon: bitcoinIcon,
    },
    isRead: false,
  },
];
