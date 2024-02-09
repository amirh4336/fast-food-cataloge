import { FC } from "react";
import { IFoodItem } from "../data";

interface IFastFoodListProps {
  fastFoodItems : IFoodItem[]
}

const FastFoodList :FC<IFastFoodListProps> = ({fastFoodItems}) => {
  return <div>FastFoodList</div>;
};

export default FastFoodList;
