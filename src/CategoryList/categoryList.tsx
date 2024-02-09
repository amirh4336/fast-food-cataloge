import Loading from "../Loading/loading";
import { FC } from "react";
import useAxios from "../hooks/useAxios";

interface ICategoryListProps {
  filterItems: (categoryId?: string) => void;
  children: React.ReactNode;
}

const CategoryList: FC<ICategoryListProps> = ({ filterItems, children }) => {
  const {
    response: categories,
    error,
    loading,
  } = useAxios({
    method: "GET",
    url: "/FoodCategory/categories",
  });

  const renderContent = () => {
    if (loading) {
      return <Loading theme="primary" />;
    }
    if (error) {
      console.log(error);
    }
    return (
      <div className="ps-3 w-100 d-flex align-items-center justify-content-between gap-5">
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
        {children}
      </div>
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
