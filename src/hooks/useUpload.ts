import { useMutation } from "react-query";
import { uploadFiles } from "../api";

export default function useUpload() {
  const { mutate, isLoading, error } = useMutation(uploadFiles);

  const status = isLoading ? "loading" : error ? "error" : "done";

  return {
    status,
    error,
    upload: mutate,
  };
}
