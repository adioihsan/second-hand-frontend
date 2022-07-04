import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
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
import { Helmet } from "react-helmet-async";
import Pagination from "../../components/pagination/Pagination";
import { useOutletContext } from "react-router-dom";
function Home(props) {
  //hooks
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const outletContext = useOutletContext();
  const { categories } = useSelector((state) => state.categoryList);
  const { data, status, message, count, page, totalPage } = useSelector(
    (state) => state.productList
  );

  // actions
  const changeCategory = (id) => {
    console.log(id);
    if (id === 0) navigate("/");
    else navigate("/category/" + id + "/1");
  };

  const handlePageChange = (pageNumber) => {
    if (params.search) navigate("/search/" + params.search + "/" + pageNumber);
    else if (params.categoryId)
      navigate("/category/" + params.categoryId + "/" + pageNumber);
    else navigate("/" + pageNumber);
  };

  // helper
  const addIconToCategories = (categories) => {
    const catWithIcon = categories.map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
        icon: faSearch,
        isActive: params.categoryId == cat.id,
        cb: changeCategory,
      };
    });
    catWithIcon.unshift({
      id: 0,
      name: "All Categories",
      icon: faSearch,
      isActive: !params.categoryId || params.categoryId === 0,
      cb: changeCategory,
    });
    return catWithIcon;
  };

  useEffect(() => {
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

  useEffect(() => {
    if (status === apiStatus.pending) {
      outletContext.setShowBar(true);
    }
    if (status !== apiStatus.pending) {
      outletContext.setShowBar(false);
    }
  }, [status]);

  return (
    <>
      <Helmet>
        <title>Secondhand. Jual beli barang second</title>
      </Helmet>
      <main className="grid gap-10 md:mt-8">
        <div className="mt-[-5rem] md:mt-0">
          <JumboBanner />
        </div>
        <article className="container mx-auto ">
          <h1 className="text-xl font-semibold  mb-3 px-3">
            Telusuri Kategori
          </h1>
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
                  onClick={() => navigate("/product-view/see/" + product.id)}
                />
              ))}
          </section>
          {status === apiStatus.success && count > 12 && (
            <Pagination
              totalPages={totalPage}
              currentPage={page}
              handleChange={handlePageChange}
            />
          )}
          {/* <Link to="/product-add">
            <ButtonPrimary className="fixed bottom-8 translate-x-[-50%] left-1/2 shadow-xl shadow-purple-300">
              + Jual
            </ButtonPrimary>
          </Link> */}
        </article>
      </main>
    </>
  );
}

export default Home;
