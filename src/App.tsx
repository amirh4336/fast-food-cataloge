import { useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import SearchBar from "./SearchBar/searchBar";
import notFound from "./assets/images/404.png";
import useAxios from "./hooks/useAxios";

function App() {

  const [url, setUrl] = useState("/FastFood/list");

  const {
    response: fastFoodItem,
    error,
    loading,
  } = useAxios({
    url,
  });

  const filterItems = (categoryId?: string) => {
    setUrl(`/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`);
  };

  const searchItems = async (term?: string) => {
    setUrl(`/FastFood/search/${term ? "?term=" + term : ""}`);
  };

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    if (error) {
      console.log(error);
    }
    if (fastFoodItem.length === 0) {
      return (
        <>
          <div className="alert alert-warning text-center">
            برای کلید واژه فوق هیچ آیتمی یافت نشد
          </div>
          <img className="mx-auto  mt-5 d-flex fade-in-horiz" src={notFound} />
        </>
      );
    }

    return <FastFoodList fastFoodItems={fastFoodItem} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList filterItems={filterItems}>
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
