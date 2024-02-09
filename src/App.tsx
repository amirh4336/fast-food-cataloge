import { useEffect, useState } from "react";
import "./App.css";
import CategoryList from "./CategoryList/categoryList";
import Header from "./Header/header";
// @ts-expect-error some bugs in get data from axios type
import axios from "./axios";
import Loading from "./Loading/loading";
import FastFoodList from "./FastFoodList/fastFoodList";
import { IFoodItem } from "./data";

function App() {
  const [loading, setLoading] = useState(false);

  const [fastFoodItem, setFastFoodItem] = useState<IFoodItem[]>([]);

  const fetchData = async (categoryId = null) => {
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
    return <FastFoodList fastFoodItems={fastFoodItem} />;
  };

  return (
    <div className="wrapper bg-faded-dark">
      <Header />
      <CategoryList />
      <div className="container mt-4">{renderContent()}</div>
    </div>
  );
}

export default App;
