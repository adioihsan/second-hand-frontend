import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import iconArrowLeft from "../../assets/images/icon-arrow-left.png";
import userImg from "../../assets/images/user.png";
import { useOutletContext } from "react-router-dom";
import "./profileInfo.css";
import { useSelector } from "react-redux";
import LoadingFull from "../../components/loading/lodingFull/LoadingFull";
import { useDispatch } from "react-redux";
import {
  getUserDetail,
  updateUserDetail,
} from "../../services/actions/userAction";
import useForm from "../../hooks/useForm";
import { useRef } from "react";
import useSuggestionInput from "../../hooks/useSuggestionInput";
import cities from "../../cache/cities.json";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import privateAxios from "../../services/apis/config/privateAxios";

function ProfileInfo(props) {
  const navProps = useOutletContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const { token } = useSelector((state) => state.user);
  const { values, errors, handleChange, setValues } = useForm();
  const { suggestions, showSuggestions, handleInput, handleSelected } =
    useSuggestionInput(cities);
  const { userDetail, pending, error, success, message } = useSelector(
    (state) => state.user
  );
  const imgPrevRef = useRef();
  // actions
  const doUpdateProfile = (e) => {
    e.preventDefault();
    if (checkIsFormValid()) {
      dispatch(updateUserDetail(values));
      if (!pending && !error) toast.success("Info profile berhasil di update");
      if (error) toast.error(message);
    } else toast.warn("Data belum lengkap");
  };

  const setImagePreview = (source) => {
    setValues({ ...values, image_url: null });
    const imgPrev = imgPrevRef.current;
    if (typeof source === "object") {
      const imgUrl = URL.createObjectURL(source);
      if (imgUrl) {
        imgPrev.src = `${imgUrl}`;
      }
      uploadImage(source);
    } else if (typeof source === "string") {
      imgPrev.src = `${process.env.REACT_APP_STORAGE_URL}/images/${source}`;
    }
  };

  const uploadImage = (file) => {
    const uploadConfig = {
      onUploadProgress: function (progressEvent) {
        var percentage = Math.round(
          (progressEvent.loaded * 90) / progressEvent.total
        );
        setProgress(percentage);
      },
    };
    const formData = new FormData();
    formData.append("image", file);
    privateAxios(token)
      .post("/image", formData, uploadConfig)
      .then((response) => {
        const url = response.data.data.url;
        setValues({ ...values, image_url: url });
        setProgress(100);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkIsFormValid = () => {
    if (Object.keys(values).length === 0) return false;
    if (Object.keys(errors).find((key) => errors[key] !== null)) return false;
    // if (Object.values(values).includes(null)) return false;
    if (
      values.name === null ||
      values.name === undefined ||
      values.city === null ||
      values.city === undefined ||
      values.phone === null ||
      values.phone === undefined ||
      values.image_url === null ||
      values.image_url === undefined
    )
      return false;

    return true;
  };

  // helpers

  //effect
  useEffect(() => {
    navProps.setNavType("back");
    navProps.setNavTitle("Info Profil");
    dispatch(getUserDetail());
  }, []);

  useEffect(() => {
    setValues({ ...userDetail });
  }, [userDetail]);
  useEffect(() => {
    if (values.image !== null) {
      setImagePreview(values.image);
      setValues({ ...values, image_url: values.image });
    }
  }, [values.image]);
  if (values.name !== undefined) {
    return (
      <div className="profileInfoWrapper">
        <button className="btnBack py-5" onClick={() => navigate(-1)}>
          <img src={iconArrowLeft} alt="back" />
        </button>
        <div className="profileInfo">
          <form className="profileInfoForm" autoComplete="off">
            <div className="inputWrapperPhoto">
              <label htmlFor="image" className="labelPhoto">
                <img
                  className={"userImage"}
                  alt="change"
                  ref={imgPrevRef}
                  src={userImg}
                />
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/png, image/jpeg"
                  className="inputPhoto"
                  onChange={(e) => {
                    setImagePreview(e.target.files[0]);
                  }}
                />
                <div
                  className="progress-user-image"
                  style={
                    progress > 1 && progress < 100
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <div
                    className="progress-bar-user-image"
                    style={{ width: progress + "%" }}
                  ></div>
                </div>
              </label>
              {errors.image && <span className="error">{errors.image}</span>}
            </div>
            <div className="inputWrapper">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="nama"
                value={values.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="inputWrapper suggestions">
              <label htmlFor="city">Kota</label>
              <input
                type="text"
                name="city"
                value={values.city}
                onChange={(e) => {
                  handleInput(e);
                  handleChange(e);
                }}
              />
              {errors.city && <span className="error">{errors.city}</span>}
              {showSuggestions && (
                <div className="suggestionsWrapper">
                  {suggestions.map((item, index) => (
                    <div
                      className="item"
                      data-index={index}
                      onClick={(e) => handleSelected(e, handleChange)}
                      key={"city " + index}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="inputWrapper">
              <label htmlFor="Contoh Jl. Semeru no35 blok b">Alamat</label>
              <textarea
                name="address"
                value={values.address}
                onChange={handleChange}
              />
              {errors.address && (
                <span className="error">{errors.address}</span>
              )}
            </div>
            <div className="inputWrapper">
              <label htmlFor="phone">No Handphone</label>
              <input
                type="number"
                name="phone"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <ButtonPrimary className="w-full mt-3" onClick={doUpdateProfile}>
              Simpan
            </ButtonPrimary>
          </form>
        </div>
        {pending && <LoadingFull />}
      </div>
    );
  } else if (pending) {
    return <LoadingFull />;
  }
}

export default ProfileInfo;
