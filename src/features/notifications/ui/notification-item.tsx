import type { Notification } from "@/features/notifications/types/notifications";
import { NotificationContent } from "./notification-item/notification-content";
import { NotificationImage } from "./notification-item/notification-image";
import { NotificationUpgrade } from "./notification-item/notification-upgrade";

interface NotificationItemProps {
  notification: Notification;
  onUpgrade?: () => void;
  className?: string;
}

export const NotificationItem = ({
  notification,
  onUpgrade,
  className = "",
}: NotificationItemProps) => {
  const formatPrice = (price: { amount: number; currency: string }) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: price.currency,
      minimumFractionDigits: 2,
    }).format(price.amount);
  };

  const formattedPrice = notification.price
    ? formatPrice(notification.price)
    : undefined;

  return (
    <div
      className={`w-full max-w-full mx-auto shadow-lg overflow-hidden ${className}`}
    >
      {notification.image && <NotificationImage image={notification.image} />}

      <NotificationContent
        title={notification.title}
        description={notification.description}
        cryptoName={notification.crypto?.name}
        cryptoIcon={notification.crypto?.icon}
        price={formattedPrice}
        timeAgo={notification.timestamp}
      />

      <NotificationUpgrade onUpgrade={onUpgrade} />
    </div>
  );
};
