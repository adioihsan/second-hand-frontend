import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import iconArrowLeft from "../../assets/images/icon-arrow-left.png";
import { useOutletContext } from "react-router-dom";
import "./productAdd.css";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCategories } from "../../services/actions/categoryAction";
import DropzoneImages from "../../components/dropzoneImages";
import { createProduct } from "../../services/actions/productAction";
import LoadingFull from "../../components/loading/lodingFull/LoadingFull";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { isFulfilled } from "@reduxjs/toolkit";
import apiStatus from "../../services/utils/apiStatus";

function ProductAdd(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const outletContext = useOutletContext();
  const { values, errors, handleChange } = useForm();
  const {
    categories,
    pending: catPending,
    error: catError,
  } = useSelector((state) => state.categoryList);
  const { data, status, message } = useSelector((state) => state.product);
  const [imagesUrl, setImagesUrl] = useState([]);
  // actions
  const doCreateProduct = (e) => {
    e.preventDefault();
    if (checkIsFormValid()) {
      if (imagesUrl.length === 0) {
        toast.warn("Tambahkan foto produk");
        console.log(imagesUrl);
        return;
      }
      const formData = { ...values, images_url: imagesUrl.toString() };
      dispatch(createProduct(formData));
    } else toast.warn("Data produk belum lengkap");
  };

  // helpers
  const checkIsFormValid = () => {
    setImagesUrl(imagesUrl);
    if (Object.keys(values).length === 0) return false;
    if (Object.keys(errors).find((key) => errors[key] !== null)) return false;
    return true;
  };
  // effect
  useEffect(() => {
    outletContext.setNavType("back");
    outletContext.setNavTitle("Lengkapi Detail Produk");
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    const toastStatus = toast;
    if (status === apiStatus.pending) {
      toastStatus.info("Sedang menyimpan produk");
      outletContext.setShowBar(true);
    } else if (status === apiStatus.success) {
      toast.success(message);
      navigate("/product-list");
      outletContext.setShowBar(false);
    } else if (status === apiStatus.error) {
      toast.error(message);
      outletContext.setShowBar(false);
    }
  }, [status]);
  return (
    <div className="productAddWrapper">
      <button className="btnBack" onClick={() => navigate(-1)}>
        <img src={iconArrowLeft} alt="back" />
      </button>
      <div className="productAdd">
        <form
          className="productAddForm"
          action="post"
          onSubmit={doCreateProduct}
        >
          <div className="inputWrapper">
            <label htmlFor="name">Nama</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Nama Produk"
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="inputWrapper">
            <label htmlFor="price">Harga Produk</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Rp 100"
              onChange={handleChange}
            />
            {errors.price && <span className="error">{errors.price}</span>}
          </div>
          <div className="inputWrapper">
            <label htmlFor="categories">Kategori</label>
            <select name="categories" id="categeories" onChange={handleChange}>
              <option value="" disabled>
                Pilih Kategori
              </option>
              {!catPending &&
                !catError &&
                categories.map((cat) => (
                  <option value={cat.id} key={"catprod" + cat.id}>
                    {cat.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="inputWrapper">
            <label htmlFor="description">Deskripsi</label>
            <textarea
              id="description"
              name="description"
              placeholder="Contoh warna,merek dan lain-lain"
              onChange={handleChange}
            />
          </div>

          <div className="inputWrapper">
            <DropzoneImages imagesUrl={imagesUrl} setImagesUrl={setImagesUrl} />
          </div>
          <div className="flex gap-3 mt-3 w-full ">
            <ButtonPrimary className="w-full" type="outlined">
              Preview
            </ButtonPrimary>
            <ButtonPrimary className="w-full">Terbitkan</ButtonPrimary>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductAdd;
