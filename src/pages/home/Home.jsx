import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import ProductCard, {
  ProductCardLoading,
} from "../../components/card/productCard/ProductCard";
import JumboBanner from "../../components/jumbotron/JumboBanner/JumboBanner";
import CategoryNav from "../../components/navigation/categoryNav/CategoryNav";
import { getCategories } from "../../services/actions/categoryAction";
import { getProductList } from "../../services/actions/productAction";
import apiStatus from "../../services/utils/apiStatus";
import "./home.css";
function Home(props) {
  //hooks
  const dispatch = useDispatch();
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { categories } = useSelector((state) => state.categoryList);
  const { data, status, message } = useSelector((state) => state.productList);

  // actions
  const changeCategory = (id) => {
    navigate("/category/" + id);
  };

  // helper
  const addIconToCategories = (categories) => {
    return categories.map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
        icon: faSearch,
        isActive: params.categoryId == cat.id,
        cb: changeCategory,
      };
    });
  };

  useEffect(() => {
    if (location.state)
      toast.success(location.state.message, {
        toastId: "toast_home",
      });
    window.history.replaceState({}, document.title);
    dispatch(getCategories());
    if (!params.categoryId && !params.search)
      dispatch(
        getProductList({
          page: 1,
          search: "",
          categoryId: "",
        })
      );
  }, []);
  useEffect(() => {
    dispatch(
      getProductList({
        page: params.page,
        limit: 12,
        search: params.search,
        categoryId: params.categoryId,
      })
    );
  }, [params.page, params.search, params.categoryId]);
  console.log(data);
  // useEffect(() => {}, [params.categoryId]);
  return (
    <main className="grid gap-10 md:mt-8">
      <div className="mt-[-5rem] md:mt-0">
        <JumboBanner />
      </div>
      <article className="container mx-auto ">
        <h1 className="text-xl font-semibold  mb-3 px-3">Telusuri Kategori</h1>
        <section className="categories ">
          {categories && (
            <CategoryNav categories={addIconToCategories(categories)} />
          )}
        </section>
        <section className="products mt-6 px-3 ">
          {status === apiStatus.pending &&
            Array(12)
              .fill(0)
              .map((dum, index) => (
                <ProductCardLoading key={"cardDummy" + index} />
              ))}
          {status === apiStatus.error && (
            <h1>Terjadi kesalahan saat mengambil data</h1>
          )}
          {status === apiStatus.success &&
            data.map((product, index) => (
              <ProductCard
                product={product}
                key={"productHome" + product.name + product.id}
              />
            ))}
          {/* {Array(12)
            .fill(0)
            .map((item, index) => (
              <Link to="/buyerproductpage">
                <ProductCard key={"Card" + index} />
              </Link>
            ))} */}
        </section>
        <Link to="/product-add">
          <ButtonPrimary className="fixed bottom-8 translate-x-[-50%] left-1/2 shadow-xl shadow-purple-300">
            + Jual
          </ButtonPrimary>
        </Link>
      </article>
    </main>
  );
}

export default Home;
