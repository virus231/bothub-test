interface NotificationHeaderProps {
  title: string;
  description: string;
}

export const NotificationHeader = ({ title, description }: NotificationHeaderProps) => {
  return (
    <>
      <h3 className="text-neutral-white-100 font-medium text-sm">
        {title}
      </h3>
      <p className="text-neutral-100 text-start text-sm leading-relaxed line-clamp-3">
        {description}
      </p>
    </>
  );
};