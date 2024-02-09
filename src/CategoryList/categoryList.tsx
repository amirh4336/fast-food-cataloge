import Loading from "../Loading/loading";
// @ts-expect-error some bugs in get data from axios type
import customAxios from "../axios";
import { FC, useEffect, useState } from "react";

interface ICategoryListProps {
  filterItems: (categoryId?: string) => void;
}

const CategoryList: FC<ICategoryListProps> = ({ filterItems }) => {
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
      return <Loading theme="primary" />;
    }

    return (
      <ul className="nav">
        <li className="nav-item" onClick={() => filterItems()}>
          <a className="nav-link" href="#">
            همه فست فود ها
          </a>
        </li>
        {categories.map((category: { id: number; name: string }) => (
          <li
            className="nav-item"
            key={category.id}
            onClick={() => filterItems(String(category.id))}
          >
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
