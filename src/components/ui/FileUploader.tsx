import React, { useState, useRef } from "react";
import { Upload } from "lucide-react";
import { toast } from "react-hot-toast";

interface FileUploaderProps {
  onFileSelect: (file: File) => void;
  accept?: string;
  maxSizeMB?: number;
  className?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  onFileSelect,
  accept = "application/pdf",
  maxSizeMB = 50,
  className = ""
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const validateAndPassFile = (file: File) => {
    // Check type
    if (accept && accept !== "*") {
      // Simple check basically.
      // For PDF: application/pdf
      if (!file.type.match(accept.replace("*", ""))) {
        toast.error(`Invalid file type. Please upload ${accept}`);
        return;
      }
    }

    // Check size
    if (file.size > maxSizeMB * 1024 * 1024) {
      toast.error(`File is too large. Max size is ${maxSizeMB}MB`);
      return;
    }

    onFileSelect(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndPassFile(e.dataTransfer.files[0]); // Usage for now logic usually handles 1 file
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndPassFile(e.target.files[0]);
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`
        relative group cursor-pointer
        border-2 border-dashed rounded-2xl p-10
        transition-all duration-300 ease-in-out
        flex flex-col items-center justify-center text-center
        ${isDragOver
          ? "border-cyan-500 bg-cyan-50/50 dark:bg-cyan-900/20 scale-[1.02]"
          : "border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-cyan-400 dark:hover:border-cyan-500 hover:bg-white dark:hover:bg-slate-800"
        }
        ${className}
      `}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accept}
        onChange={handleChange}
      />

      {/* Icon Circle */}
      <div className={`
        mb-6 p-4 rounded-full transition-colors duration-300
        ${isDragOver ? "bg-cyan-100 text-cyan-600" : "bg-white dark:bg-slate-700 text-cyan-500 shadow-md group-hover:scale-110 group-hover:text-cyan-600"}
      `}>
        <Upload className="w-10 h-10" />
      </div>

      <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
        Click to upload or drag and drop
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        {accept === "application/pdf" ? "PDF" : "Files"} up to {maxSizeMB}MB
      </p>
    </div>
  );
};

export default FileUploader;
