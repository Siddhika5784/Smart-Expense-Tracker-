import { LoaderCircle } from "lucide-react";

function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <LoaderCircle
        size={40}
        className="animate-spin text-blue-600"
      />

      <p className="mt-4 text-gray-500 font-medium">
        {text}
      </p>
    </div>
  );
}

export default LoadingSpinner;