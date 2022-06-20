import React from "react";
import ButtonPrimary from "../../components/button/buttonPrimary/ButtonPrimary";
import ProductCard from "../../components/card/productCard/ProductCard";
import JumboBanner from "../../components/jumbotron/JumboBanner/JumboBanner";
import JumboSlider from "../../components/jumbotron/JumboSlider";
import CategoryNav from "../../components/navigation/categoryNav/CategoryNav";
import "./home.css";
function Home(props) {
  return (
    <main className="grid gap-10 md:mt-8">
      <div className="mt-[-5rem] md:mt-0">
        <JumboBanner />
      </div>

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
        <ButtonPrimary className="fixed bottom-8 translate-x-[-50%] left-1/2 shadow-xl shadow-purple-300">
          + Jual
        </ButtonPrimary>
      </article>
    </main>
  );
}

export default Home;
