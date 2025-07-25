interface NotificationMetaProps {
  timeAgo: string;
}

export const NotificationMeta = ({ timeAgo }: NotificationMetaProps) => {
  return (
    <p className="text-neutral-50 text-sm">{timeAgo}</p>
  );
};