interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon = ({ name, className = "", size }: IconProps) => {
  const style = size ? { fontSize: `${size}px` } : undefined;

  return (
    <span className={`material-symbols-outlined ${className}`} style={style}>
      {name}
    </span>
  );
};
