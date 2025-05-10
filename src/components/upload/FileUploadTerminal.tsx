"use client";
import { AlertTriangle, CheckCircle, Upload } from "lucide-react";
import DropZone from "./DropZone";
import UploadButton from "./UploadButton";
import TerminalOutput from "./TerminalOutput";
import CyberpunkPanel from "../ui/Panel";
import { useFileUpload } from "@/hooks/useFileUpload";

const FileUploadTerminal = () => {
  const {
    file,
    fileInputRef,
    uploadStatus,
    isUploading,
    errorMessage,
    uploadMeta,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleUpload,
  } = useFileUpload();


  return (
    <CyberpunkPanel
      color="cyan"
      clipPath="polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)"
    >
      <div className="text-center">
        <h2 className="text-xl text-cyan-400 font-bold uppercase mb-4 flex items-center justify-center">
          <Upload className="w-5 h-5 mr-2" />
          File Upload Terminal
        </h2>

        <DropZone
          file={file}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          fileInputRef={fileInputRef}
          handleFileChange={handleFileChange}
        />

        {uploadStatus === "success" && (
          <div className="flex items-center justify-center text-green-400 mb-4">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Upload complete. File processed successfully.</span>
          </div>
        )}

        {uploadStatus === "error" && (
          <div className="flex items-center justify-center text-red-500 mb-4">
            <AlertTriangle className="w-5 h-5 mr-2" />
            <span>{errorMessage}</span>
          </div>
        )}

        <UploadButton
          onClick={handleUpload}
          disabled={!file || isUploading}
          isUploading={isUploading}
        />
      </div>

      <TerminalOutput
        isUploading={isUploading}
        uploadStatus={uploadStatus}
        errorMessage={errorMessage}
        fileMeta={uploadMeta}
      />
    </CyberpunkPanel>
  );
};

export default FileUploadTerminal;
