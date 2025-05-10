import React from "react";
import { List } from "lucide-react";

import CyberpunkPanel from "@/components/ui/Panel";
import StatusIndicator from "@/components/ui/StatusIndicator";
import Card from "@/components/ui/Card";
import { DataServices } from "@/data/services";

const ServicesList = () => {
  const services = DataServices;

  return (
    <CyberpunkPanel
      color="pink"
      clipPath="polygon(0 0, 100% 0, 100% 100%, 15px 100%, 0 calc(100% - 15px))"
    >
      <div className="flex items-center mb-6">
        <List className="w-5 h-5 text-pink-500 mr-2" />
        <h2 className="text-xl text-pink-500 font-bold uppercase">Services</h2>
      </div>

      <div className="space-y-6">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            color={service.color}
          />
        ))}
      </div>

      {/* Tech decoration */}
      <div className="mt-6 border-t border-gray-700 pt-4">
        <div className="flex justify-between text-xs text-gray-500">
          <span>SYSTEM STATUS</span>
          <StatusIndicator status="ONLINE" color="green" />
        </div>
      </div>
    </CyberpunkPanel>
  );
};

export default ServicesList;
