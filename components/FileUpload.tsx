import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";
import { Button } from "./ui/button";

interface FileUploadProps {
  label?: string;
  accept?: string;
  onFileSelect: (file: File | null) => void;
  error?: string;
}

export const FileUpload = ({
  label = "Upload File",
  accept = "*",
  onFileSelect,
  error,
}: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileSelect(file);
  };

  return (
    <div className="space-y-2">
      {label && <label className="text-sm font-medium">{label}</label>}
      <div
        className={cn(
          "flex items-center justify-center w-full px-4 py-3 border border-dashed rounded-lg cursor-pointer hover:bg-gray-50 transition",
          error && "border-destructive"
        )}
        onClick={() => fileInputRef.current?.click()}
      >
        <Upload className="w-5 h-5 mr-2 text-gray-500" />
        <Button
          variant="default"
            className="rounded-[3xl]"
            >Browse</Button>
        {/* <span className="text-gray-600 text-sm">Browse</span> */}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleFileChange}
      />
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};
