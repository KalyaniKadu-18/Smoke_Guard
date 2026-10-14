import React, { useState } from "react";
import styles from "./UploadBox.module.css";

function UploadBox() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className={styles.uploadBox}>
      <h2>Smoke Detection</h2>

      <p>Upload an image or video to detect smoke</p>

      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
      />

      {file && <p>Selected File: {file.name}</p>}

      <button disabled={!file} onClick={() => alert("Detection coming soon!")}>
        Detect Smoke
      </button>
    </div>
  );
}

export default UploadBox;