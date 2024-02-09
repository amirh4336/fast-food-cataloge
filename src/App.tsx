import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
// @ts-expect-error some bugs in get data from axios type
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import { IFoodItem } from "./data";
import SearchBar from "./SearchBar/searchBar";
import notFound from './assets/images/404.png'


function App() {
  const [loading, setLoading] = useState(false);

  const [fastFoodItem, setFastFoodItem] = useState<IFoodItem[]>([]);

  const fetchData = async (categoryId: string | null = null) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/list/${categoryId ? "?categoryId=" + categoryId : ""}`
    );

    setLoading(false);
    setFastFoodItem(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }
    if (fastFoodItem.length === 0) {
      return(<>
      <div className="alert alert-warning text-center">
          برای کلید واژه فوق هیچ آیتمی یافت نشد
      </div>
      <img className="mx-auto  mt-5 d-flex fade-in-horiz" src={notFound} />
      </>)
    }

    return <FastFoodList fastFoodItems={fastFoodItem} />;
  };

  const filterItems = (categoryId?: string) => {
    fetchData(categoryId);
  };

  const searchItems = async (term?: string) => {
    setLoading(true);
    const response = await axios.get(
      `/FastFood/search/${term ? "?term=" +term : ""}`
    )
    setLoading(false)
    setFastFoodItem(response.data)
  }

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList filterItems={filterItems} >
        <SearchBar searchItems={searchItems} />
      </CategoryList>
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
