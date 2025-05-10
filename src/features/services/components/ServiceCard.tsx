import React from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
};

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  return (
    <div className="group">
      <div
        className={`flex items-start p-3 bg-gray-800 hover:bg-gray-700 transition-colors border-l-2 ${color.split(" ")[1]}`}
      >
        <div
          className={`p-2 ${color.split(" ")[0]} ${color.split(" ")[1]} border mr-3`}
        >
          {icon}
        </div>
        <div>
          <h3 className={`font-bold mb-1 ${color.split(" ")[0]}`}>{title}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
