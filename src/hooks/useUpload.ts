import { useState } from "react";

export default function useUpload() {
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);
  const upload = () => {};
  return {
    status,
    error,
    upload,
  };
}
