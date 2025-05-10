import StatusIndicator from "../ui/StatusIndicator";

type CyberpunkFooterProps = {
  version: string;
  system: string;
  product: string;
};

const CyberpunkFooter = ({
  version,
  system,
  product,
}: CyberpunkFooterProps) => {
  return (
    <footer className="mt-16 pt-8 border-t border-gray-800 text-sm text-gray-500 pb-16">
      <div className="flex justify-between items-center">
        <div>
          {system} • {product} {version}
        </div>
        <StatusIndicator status="CONNECTION SECURE" color="cyan" />
      </div>
    </footer>
  );
};

export default CyberpunkFooter;
