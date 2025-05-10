import CyberpunkBadge from "../ui/Badge";

type CyberpunkHeaderProps = {
  title: string;
  subtitle: string;
};

const CyberpunkHeader = ({ title, subtitle }: CyberpunkHeaderProps) => {
  return (
    <header className="pt-10 pb-16">
      <div className="flex items-center mb-4">
        <CyberpunkBadge
          text="NetCorp_FileSystem.v2.4.7"
          position="left"
          color="cyan"
        />
        <CyberpunkBadge text="[SECURE]" position="right" color="cyan" />
      </div>

      <h1 className="text-4xl font-bold text-cyan-400 uppercase tracking-wider mb-3">
        {title}
      </h1>
      <p className="text-xl text-gray-400">{subtitle}</p>
    </header>
  );
};

export default CyberpunkHeader;
