import Loading from "../Loading/loading";
import customAxios from "../axios";
import { useEffect, useState } from "react";

const CategoryList = () => {
  const [loading, setLoading] = useState(true);
  const [categories, setCatgories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await customAxios.get("/FoodCategory/categories");

      setCatgories(response.data);
      setLoading(false);
      // console.log(response);
    };

    fetchCategories();
  }, []);

  const renderContent = () => {
    if (loading) {
      return <Loading />;
    }

    return (
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="#">
            همه فست فود ها
          </a>
        </li>
        {categories.map((category: { id: number; name: string }) => (
          <li className="nav-item" key={category.id}>
            <a className="nav-link" href="#">
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <nav className="container mt-n5">
      <div
        className="bg-white d-flex align-items-center rounded-3 shadow-lg py-4"
        style={{ height: "80px" }}
      >
        {renderContent()}
      </div>
    </nav>
  );
};

export default CategoryList;
