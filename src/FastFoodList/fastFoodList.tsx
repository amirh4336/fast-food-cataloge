import { FC } from "react";
import { IFoodItem } from "../data";
import FastFoodItem from "../FastFoodItem/fastFoodItem";

interface IFastFoodListProps {
  fastFoodItems : IFoodItem[]
}

const FastFoodList :FC<IFastFoodListProps> = ({fastFoodItems}) => {
  return <div className="row">
    {fastFoodItems.map(fastFood => (
      <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastFood.id}>
        <FastFoodItem {...fastFood} />
      </div>
    )) }
  </div>;
};

export default FastFoodList;
