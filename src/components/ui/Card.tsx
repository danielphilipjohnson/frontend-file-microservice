import { ColorTokens } from "@/tokens/colors";

type CardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  color?: keyof (typeof ColorTokens)["cyberpunk"];
  onClick?: () => void;
  className?: string;
};

const Card = ({
  title,
  description,
  icon,
  color = "cyan",
  onClick,
  className = "",
}: CardProps) => {
  const colorClasses = {
    border: `border-${color}-400`,
    text: `text-${color}-400`,
    bg: `bg-${color}-400/10 hover:bg-${color}-400/20`,
  };

  return (
    <div
      className={`
        group 
        ${onClick ? "cursor-pointer" : ""} 
        ${className}
      `}
      onClick={onClick}
    >
      <div
        className={`
          flex items-start 
          p-3 
          bg-gray-800 
          hover:bg-gray-700 
          transition-colors 
          border-l-2 
          ${colorClasses.border}
        `}
      >
        {icon && (
          <div
            className={`
              p-2 
              ${colorClasses.text} 
              ${colorClasses.border} 
              border 
              mr-3
            `}
          >
            {icon}
          </div>
        )}
        <div>
          <h3
            className={`
              font-bold 
              mb-1 
              ${colorClasses.text}
            `}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
