// hooks/useFileUpload.ts
import { useRef, useState } from "react";

type FileMetadata = {
	name: string;
	size: number;
	type: string;
};

export function useFileUpload() {
	const [file, setFile] = useState<File | null>(null);
	const [uploadStatus, setUploadStatus] = useState<string | null>(null);
	const [isUploading, setIsUploading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [uploadMeta, setUploadMeta] = useState<FileMetadata | null>(null);

	const fileInputRef = useRef<HTMLInputElement>(null!);

	const reset = () => {
		setFile(null);
		setUploadStatus(null);
		setErrorMessage("");
		setUploadMeta(null);
		if (fileInputRef.current) fileInputRef.current.value = "";
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = event.target.files?.[0];
		if (!selectedFile) return;
		reset();
		setFile(selectedFile);
	};

	const handleDragOver = (event: { preventDefault: () => void }) => {
		event.preventDefault();
	};


	const handleDrop = (event: React.DragEvent) => {
		event.preventDefault();
		const droppedFile = event.dataTransfer.files[0];
		if (!droppedFile) return;
		reset();
		setFile(droppedFile);
	};

	const handleUpload = async () => {
		if (!file) {
			setUploadStatus("error");
			setErrorMessage("No file selected for upload.");
			return;
		}

		const allowedTypes = ["text/plain", "application/json", "application/pdf"];
		if (!allowedTypes.includes(file.type)) {
			setUploadStatus("error");
			setErrorMessage(
				`File type '${file.type}' not allowed. Please upload a TXT, JSON, or PDF file.`,
			);
			return;
		}

		if (file.size > 1048576) {
			setUploadStatus("error");
			setErrorMessage("File size exceeds 1MB limit.");
			return;
		}

		setIsUploading(true);
		setUploadStatus(null);

		try {
			const formData = new FormData();
			formData.append("upfile", file);

			const response = await fetch("/api/upload", {
				method: "POST",
				body: formData,
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.message || "Upload failed");
			}

			const data = await response.json();
			setUploadStatus("success");
			setUploadMeta(data);
			setFile(null);
			if (fileInputRef.current) fileInputRef.current.value = "";
		} catch (error) {
			setUploadStatus("error");
			setErrorMessage(
				(error as Error).message || "Failed to upload file. Please try again.",
			);
		} finally {
			setIsUploading(false);
		}
	};

	return {
		file,
		setFile,
		fileInputRef,
		uploadStatus,
		isUploading,
		errorMessage,
		uploadMeta,
		handleFileChange,
		handleDrop,
		handleDragOver,
		handleUpload,
	};
}
