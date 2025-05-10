import { Files } from "lucide-react";

type DropZoneProps = {
  file: File | null;
  onDragOver: (event: React.DragEvent) => void;
  onDrop: (event: React.DragEvent) => void;
  onClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const DropZone = ({
  file,
  onDragOver,
  onDrop,
  onClick,
  fileInputRef,
  handleFileChange,
}: DropZoneProps) => {
  return (
    <div
      className={`border-2 border-dashed ${
        file
          ? "border-green-400 bg-green-900 bg-opacity-10"
          : "border-gray-600 hover:border-cyan-400"
      } rounded-sm p-10 cursor-pointer transition-colors mb-4`}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={onClick}
    >
      <input
        type="file"
        onChange={handleFileChange}
        className="hidden"
        ref={fileInputRef}
        accept=".txt,.json,.pdf"
      />
      <Files className="w-16 h-16 mx-auto mb-4 text-gray-500" />
      {file ? (
        <div>
          <p className="text-green-400">File selected:</p>
          <p className="text-sm text-cyan-400">{file.name}</p>
          <p className="text-xs text-gray-500 mt-1">
            {(file.size / 1024).toFixed(2)} KB • {file.type}
          </p>
        </div>
      ) : (
        <div>
          <p className="mb-1">Drop your file here or click to browse</p>
          <p className="text-xs text-gray-500">
            Supports TXT, JSON, PDF (Max 1MB)
          </p>
        </div>
      )}
    </div>
  );
};

export default DropZone;
