import { useQuery } from "react-query";
import { getFiles } from "../api";

export default function useFiles() {
  const { data, isLoading, error, refetch } = useQuery(["files"], getFiles);

  const status = isLoading ? "loading" : error ? "error" : "done";

  return {
    files: data,
    status,
    error,
    refetch,
  };
}
