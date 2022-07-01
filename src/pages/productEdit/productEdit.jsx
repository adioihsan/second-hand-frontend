import React, { useEffect, useState } from "react";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import iconCamera from "../../assets/images/icon-camera.png";
import iconArrowLeft from "../../assets/images/icon-arrow-left.png";
import { useOutletContext } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getCategories } from "../../services/actions/categoryAction";
import DropzoneImages from "../../components/dropzoneImages";
import {
  getMyProduct,
  updateProduct,
} from "../../services/actions/productAction";
import LoadingFull from "../../components/loading/lodingFull/LoadingFull";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

function ProductEdit(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const navProps = useOutletContext();
  const { values, errors, handleChange, setValues } = useForm();
  const {
    categories,
    pending: catPending,
    error: catError,
  } = useSelector((state) => state.categoryList);
  const { data, pending, message, error } = useSelector(
    (state) => state.product
  );
  const [imagesUrl, setImagesUrl] = useState([]);
  // actions
  const doUpdateProduct = (e) => {
    e.preventDefault();
    if (checkIsFormValid()) {
      if (imagesUrl.length === 0) {
        toast.warn("Tambahkan foto produk");
        console.log(imagesUrl);
        return;
      }
      const formData = { ...values, images_url: imagesUrl.toString() };
      dispatch(updateProduct(formData));
      if (error) toast.error(message);
      if (!pending && !error) {
        toast.success("product berhasil di update");
        navigate(-1);
      }
    } else toast.warn("Data produk belum lengkap");
  };
  // helpers
  const checkIsFormValid = () => {
    setImagesUrl(imagesUrl);
    if (Object.keys(values).length === 0) return false;
    if (Object.keys(errors).find((key) => errors[key] !== null)) return false;
    if (imagesUrl.length === 0) return false;
    return true;
  };
  // effect
  useEffect(() => {
    navProps.setNavType("back");
    navProps.setNavTitle("Lengkapi Detail Produk");
    dispatch(getCategories());
  }, []);
  useEffect(() => {
    if (params.productId) dispatch(getMyProduct(params.productId));
  }, [params.productId]);

  useEffect(() => {
    if (data) {
      setValues({ ...data });
      setImagesUrl(data.images_url.split(","));
    }
  }, [data]);
  if (pending) return <LoadingFull />;
  if (error) navigate(-1);
  if (values)
    return (
      <div className="productAddWrapper">
        {pending && <LoadingFull />}
        <button className="btnBack" onClick={() => navigate(-1)}>
          <img src={iconArrowLeft} alt="back" />
        </button>
        <div className="productAdd">
          <form className="productAddForm">
            <div className="inputWrapper">
              <label htmlFor="name">Nama</label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
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
                value={values.price}
                placeholder="Rp 100"
                onChange={handleChange}
              />
              {errors.price && <span className="error">{errors.price}</span>}
            </div>
            <div className="inputWrapper">
              <label htmlFor="categories">Kategori</label>
              <select
                name="categories"
                id="categeories"
                onChange={handleChange}
              >
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
                value={values.description}
                placeholder="Contoh warna,merek dan lain-lain"
                onChange={handleChange}
              />
            </div>

            <div className="inputWrapper">
              <DropzoneImages
                imagesUrl={imagesUrl}
                setImagesUrl={setImagesUrl}
                update
              />
            </div>
            <div className="flex gap-3 mt-3 w-full ">
              <ButtonPrimary className="w-full" type="outlined">
                Preview
              </ButtonPrimary>
              <ButtonPrimary className="w-full" onClick={doUpdateProduct}>
                Simpan
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    );
}

export default ProductEdit;
