import React from "react";
import ProductCard from "../../components/card/productCard/ProductCard";
import JumboBanner from "../../components/jumbotron/JumboBanner/JumboBanner";
import JumboSlider from "../../components/jumbotron/JumboSlider";
import CategoryNav from "../../components/navigation/categoryNav/CategoryNav";
import "./home.css";
function Home(props) {
  return (
    <main className="grid gap-10">
      <JumboBanner />
      <article className="container mx-auto ">
        <section className="categories ">
          <h1 className="text-xl font-semibold  mb-3 px-3">
            Telusuri Kategori
          </h1>
          <CategoryNav />
        </section>
        <section className="products mt-6 px-3 ">
          {Array(12)
            .fill(0)
            .map((item, index) => (
              <ProductCard key={"Card" + index} />
            ))}
        </section>
      </article>
    </main>
  );
}

export default Home;
