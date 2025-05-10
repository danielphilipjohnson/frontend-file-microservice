import { Terminal } from "lucide-react";

type FileMetadata = {
  name: string;
  size: number;
  type: string;
};

type TerminalOutputProps = {
  isUploading: boolean;
  uploadStatus: string | null;
  errorMessage: string;
  fileMeta?: FileMetadata | null;
};

const TerminalOutput = ({
  isUploading,
  uploadStatus,
  errorMessage,
  fileMeta,
}: TerminalOutputProps) => {
  return (
    <div className="mt-8 bg-black p-4 border border-gray-800 font-mono text-sm text-green-400">
      <div className="flex items-center mb-2">
        <Terminal className="w-4 h-4 mr-2" />
        <span className="text-gray-500">system_output:</span>
      </div>
      {isUploading ? (
        <div className="animate-pulse">Establishing secure connection...</div>
      ) : uploadStatus === "success" && fileMeta ? (
        <div>
          <span className="text-cyan-400">{">"}</span> Connection established
          <br />
          <span className="text-cyan-400">{">"}</span> File verification: PASSED
          <br />
          <span className="text-cyan-400">{">"}</span> Encryption protocol:
          ACTIVE
          <br />
          <span className="text-cyan-400">{">"}</span> Upload complete
          <br />
          <span className="text-cyan-400">{">"}</span>{" "}
          <span className="text-green-400">
            STATUS: File processed successfully
          </span>
          <br />
          <span className="text-cyan-400">{">"}</span>{" "}
          <span>
            File: <strong>{fileMeta.name}</strong>
          </span>
          <br />
          <span className="text-cyan-400">{">"}</span>{" "}
          <span>Size: {Math.round(fileMeta.size / 1024)} KB</span>
          <br />
          <span className="text-cyan-400">{">"}</span>{" "}
          <span>Type: {fileMeta.type}</span>
          <br />
        </div>
      ) : uploadStatus === "error" ? (
        <div className="text-red-500">
          <span className="text-cyan-400">{">"}</span> Connection error
          <br />
          <span className="text-cyan-400">{">"}</span>{" "}
          <span className="text-red-500">STATUS: {errorMessage}</span>
        </div>
      ) : (
        <div>
          <span className="text-cyan-400">{">"}</span> System ready
          <br />
          <span className="text-cyan-400">{">"}</span> Waiting for file
          selection...
          <br />
          <span className="text-cyan-400">{">"}</span>{" "}
          <span className="text-yellow-500 animate-pulse">STATUS: Idle</span>
        </div>
      )}
    </div>
  );
};

export default TerminalOutput;
