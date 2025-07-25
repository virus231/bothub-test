import { Button } from "./button";
import { Icon } from "./icon";

interface IconSecondaryButtonProps {
  icon: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

export const IconSecondaryButton = ({
  icon,
  onClick,
  className = "",
  disabled = false,
  ariaLabel,
}: IconSecondaryButtonProps) => {
  return (
    <Button
      intent="icon"
      size="icon"
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={className}
    >
      <Icon name={icon} size={16} />
    </Button>
  );
};
