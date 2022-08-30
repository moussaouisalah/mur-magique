import axios from "../api";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Button from "../components/Button";
import Container from "../components/Container";
import Header from "../components/Header";
import Title from "../components/Title";

const Upload = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles: any) => {
    setFiles(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleFileUpload = () => {
    setLoading(true);
    const formData = new FormData();
    files.forEach((file: any) => {
      formData.append("files", file);
    });
    axios
      .post("/upload", formData, {
        /* TODO: replace with actual endpoint */
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        window.location.href = "/list";
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
  };

  return (
    <Container>
      <div className="flex flex-col items-center gap-5 w-full max-w-xl">
        <Title label="Upload" />
        <p>{error}</p>
        <div
          {...getRootProps()}
          className="w-full flex flex-col items-center py-5 border-2 border-dashed"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <p>Drag 'n' drop some files here, or click to select files</p>
          )}
        </div>
        {files.map((file: any) => (
          <div key={file.name} className="w-full flex justify-between">
            <p>{file.name}</p>
            <p>{file.size} bytes</p>
          </div>
        ))}
        <Button
          label="Upload"
          onClick={handleFileUpload}
          isLoading={isLoading}
        />
      </div>
    </Container>
  );
};

export default Upload;
