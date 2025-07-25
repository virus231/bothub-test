import { Button } from "@/shared/ui/button";

interface NotificationUpgradeProps {
  onUpgrade?: () => void;
}

export const NotificationUpgrade = ({
  onUpgrade,
}: NotificationUpgradeProps) => {
  return (
    <Button
      intent="secondary"
      size="small"
      onClick={onUpgrade}
      className="text-sm cursor-pointer mb-3"
    >
      Upgrade
    </Button>
  );
};
