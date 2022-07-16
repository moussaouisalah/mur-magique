import { useState } from "react";

export default function useFiles() {
  const [files, setFiles] = useState(null);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const refetch = () => {};
  return {
    files,
    status,
    error,
    refetch,
  };
}
