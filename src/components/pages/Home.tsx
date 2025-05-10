import FileUploadTerminal from "@/components/upload/FileUploadTerminal";
import ServicesList from "@/features/services/components/ServicesList";
import Header from "@/components/layout/Header";

const CyberpunkFileUpload = () => {
  return (
    <main>
      <Header
        title="Uplink File Interface"
        subtitle="Secure data transmission portal for authorized agents"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <FileUploadTerminal />
        </div>

        <div className="lg:col-span-1">
          <ServicesList />
        </div>
      </div>
    </main>
  );
};

export default CyberpunkFileUpload;
