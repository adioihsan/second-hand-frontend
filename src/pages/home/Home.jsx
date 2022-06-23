import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import ProductCard from "../../components/card/productCard/ProductCard";
import JumboBanner from "../../components/jumbotron/JumboBanner/JumboBanner";
import JumboSlider from "../../components/jumbotron/JumboSlider";
import CategoryNav from "../../components/navigation/categoryNav/CategoryNav";
import { getCategories } from "../../services/actions/categoryAction";
import "./home.css";
function Home(props) {
  //hooks
  const disatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const { categories, pending, error } = useSelector(
    (state) => state.categoryList
  );

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
    disatch(getCategories());
    console.log("dispatched");
  }, []);

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
          {Array(12)
            .fill(0)
            .map((item, index) => (
              <ProductCard key={"Card" + index} />
            ))}
        </section>
        <ButtonPrimary className="fixed bottom-8 translate-x-[-50%] left-1/2 shadow-xl shadow-purple-300">
          + Jual
        </ButtonPrimary>
      </article>
    </main>
  );
}

export default Home;
