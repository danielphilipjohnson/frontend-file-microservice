import { Upload, RotateCw } from "lucide-react";
import { Button, ButtonProps } from "../ui/Button";

type UploadButtonProps = ButtonProps & {
  onClick: () => void;
  isUploading?: boolean;
};

const UploadButton = ({
  onClick,
  isUploading = false,
  disabled,
  ...props
}: UploadButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled || isUploading}
      color="cyan"
      className="mt-4 flex items-center"
      {...props}
    >
      {isUploading ? (
        <>
          <RotateCw className="w-5 h-5 mr-2 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <Upload className="w-5 h-5 mr-2" />
          Upload File
        </>
      )}
    </Button>
  );
};

export default UploadButton;
