import { Icon } from "@/shared/ui/icon";
import { CryptoInfo } from "./crypto-info";
import { NotificationHeader } from "./notification-header";
import { NotificationMeta } from "./notification-meta";

interface NotificationContentProps {
  title: string;
  description: string;
  cryptoName?: string;
  cryptoIcon?: string;
  price?: string;
  timeAgo: string;
}

export const NotificationContent = ({
  title,
  description,
  cryptoName,
  cryptoIcon,
  price,
  timeAgo,
}: NotificationContentProps) => {
  return (
    <div className="p-0">
      <div className="flex items-start gap-2 py-3">
        <Icon name="notifications" className="text-neutral-50" size={20} />
        <div className="flex flex-col items-start gap-2">
          <NotificationHeader title={title} description={description} />

          {cryptoName && cryptoIcon && price && (
            <CryptoInfo
              cryptoName={cryptoName}
              cryptoIcon={cryptoIcon}
              price={price}
            />
          )}

          <NotificationMeta timeAgo={timeAgo} />
        </div>
      </div>
    </div>
  );
};
