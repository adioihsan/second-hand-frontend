import React, { useCallback, useState } from "react";
import styles from "./dropzoneImages.module.scss";
import { useDropzone } from "react-dropzone";
import { useEffect } from "react";
import privateAxios from "../../services/apis/config/privateAxios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function DropzoneImages({ imagesUrl, setImagesUrl, update }) {
  const [images, setImages] = useState([]);
  const [progress, setProgress] = useState({});
  const { token } = useSelector((state) => state.user);
  const uploadImages = (file) => {
    const uploadConfig = {
      onUploadProgress: function (progressEvent) {
        var percentage = Math.round(
          (progressEvent.loaded * 95) / progressEvent.total
        );
        setProgress((prevProg) => {
          return {
            ...prevProg,
            [file.name]: percentage,
          };
        });
      },
    };
    const formData = new FormData();
    formData.append("image", file);
    privateAxios(token)
      .post("/image", formData, uploadConfig)
      .then((response) => {
        const url = response.data.data.url;
        setImagesUrl((prevImages) => {
          const newImages = prevImages.concat([url]);
          return newImages;
        });
        setProgress((prevProg) => {
          return {
            ...prevProg,
            [file.name]: 100,
          };
        });
      })
      .catch((err) => {
        err.response.data
          ? toast.error(err.response.data.message)
          : toast.error("Gagal upload foto produk");
        setImages((prevImages) => {
          const failIndex = prevImages.indexOf(file);
          const newPrev = prevImages.filter(
            (img, imgIndex) => failIndex !== imgIndex
          );
          return newPrev;
        });
      });
  };
  const removeImage = (e, file, index) => {
    e.preventDefault();
    privateAxios(token)
      .delete("/image", { data: { url: imagesUrl[index] } })
      .then((response) => {
        setImages((prevImages) =>
          prevImages.filter((img, imgIndex) => index !== imgIndex)
        );
      })
      .catch((error) => {
        toast.error("Gagal menghapus image");
      });
    imagesUrl.splice(index, 1);
  };

  const onDrop = useCallback((acceptedFiles) => {
    const filesWithUrl = acceptedFiles.map((file) => {
      return Object.assign(file, {
        localUrl: URL.createObjectURL(file),
      });
    });
    setImages((prevImages) => {
      const newImages = [];
      let imageCount = prevImages.length;
      if (imageCount >= 5) return prevImages;
      filesWithUrl.every((file) => {
        if (imageCount >= 5) return false;
        newImages.push(file);
        imageCount++;
        return true;
      });
      const joinImages = prevImages.concat(newImages);
      return joinImages;
    });
    //upload
    const imageCount = images.length;
    if (imageCount < 5) {
      filesWithUrl.forEach((file) => {
        uploadImages(file);
      });
    }
  }, []);
  const {
    getRootProps,
    getInputProps,
    open,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 5,
    noClick: true,
  });

  const renderPreview = images?.map((file, index) => (
    <div className={styles.image} key={"preview" + index}>
      <img
        src={
          file.isDownload
            ? process.env.REACT_APP_STORAGE_URL + "/images/" + file.localUrl
            : file.localUrl
        }
      />
      {!file.isDownload && progress[file.name] !== 100 && (
        <div className={styles.progress}>
          <div
            className={styles.bar}
            style={{ width: progress[file.name] + "%" }}
          ></div>
        </div>
      )}
      <div className={styles.actionBtns}>
        <button
          className={styles.remove}
          onClick={(e) => removeImage(e, file, index)}
        >
          Remove
        </button>
      </div>
    </div>
  ));

  const generateFiles = async () => {
    const files = imagesUrl.map((url) => {
      return {
        localUrl: url,
        isDownload: true,
      };
    });
    setImages(files);
  };

  useEffect(() => {
    if (update) generateFiles();
  }, [imagesUrl]);

  return (
    <div
      {...getRootProps()}
      className={
        styles.dropzoneImages +
        " " +
        [
          isFocused
            ? styles.focused
            : isDragAccept
            ? styles.accept
            : isDragReject
            ? styles.reject
            : "",
        ]
      }
    >
      <input {...getInputProps()} />

      <div className={styles.placeholder}>
        {images.length === 0 ? (
          <>
            <p>Drop images here</p>
            <p className="mb-5">Max 5 images</p>
          </>
        ) : (
          ""
        )}
      </div>

      <div className={styles.preview}>{renderPreview}</div>

      <div className={styles.openDialog} onClick={open}>
        {" "}
        or Click Here
      </div>
    </div>
  );
}

export default DropzoneImages;
