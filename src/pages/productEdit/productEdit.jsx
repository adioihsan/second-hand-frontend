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
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import apiStatus from "../../services/utils/apiStatus";
import { Helmet } from "react-helmet-async";

function ProductEdit(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const outletContex = useOutletContext();
  const [isAction, setIsAction] = useState(false);
  const { values, errors, handleChange, setValues } = useForm();
  const {
    categories,
    pending: catPending,
    error: catError,
  } = useSelector((state) => state.categoryList);
  const { data, message, status } = useSelector((state) => state.product);
  const [imagesUrl, setImagesUrl] = useState([]);
  // actions
  const doUpdateProduct = (e) => {
    e.preventDefault();
    if (checkIsFormValid()) {
      if (imagesUrl.length === 0) {
        toast.warn("Tambahkan foto produk");
        return;
      }
      console.log("cate", values);
      const formData = {
        ...values,
        images_url: imagesUrl.toString(),
      };
      dispatch(updateProduct(formData));
      setIsAction(true);
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
    outletContex.setNavType("back");
    outletContex.setNavTitle("Lengkapi Detail Produk");
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (params.productId) dispatch(getMyProduct(params.productId));
  }, [params.productId]);

  useEffect(() => {
    if (status === apiStatus.pending) {
      outletContex.setShowBar(true);
    } else if ((status === apiStatus.success) & isAction) {
      toast.success("Produk berhasil di update");
      navigate(-1);
    } else if ((status === apiStatus.error) & isAction) {
      toast.error(message);
    } else if (status === apiStatus.success) {
      setValues({ ...data, categories: data.categories[0].id + "" });
      console.log("first data", data);
      setImagesUrl(data.images_url.split(","));
      outletContex.setShowBar(false);
    } else if (status === apiStatus.error) {
      toast.error(message);
      outletContex.setShowBar(false);
      navigate("/");
    }
    if (status !== apiStatus.pending) {
      outletContex.setShowBar(false);
    }
  }, [status]);

  if (Object.keys(values).length !== 0)
    return (
      <>
        <Helmet>
          <title>Seconhand. Edit-{values.name} </title>
        </Helmet>
        <div className="productAddWrapper">
          {/* <button className="btnBack" onClick={() => navigate(-1)}>
            <img src={iconArrowLeft} alt="back" />
          </button> */}
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
                  value={values.categories}
                >
                  <option value="0" disabled>
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
      </>
    );
}

export default ProductEdit;
