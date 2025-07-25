interface NotificationImageProps {
  image: string;
}

export const NotificationImage = ({ image }: NotificationImageProps) => {
  return (
    <div className="relative">
      <img
        loading="lazy"
        src={image}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );
};