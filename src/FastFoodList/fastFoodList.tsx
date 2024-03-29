import { FC } from "react";
import { IFoodItem } from "../data";
import FastFoodItem from "../FastFoodItem/fastFoodItem";

interface IFastFoodListProps {
  fastFoodItems: IFoodItem[];
}

const FastFoodList: FC<IFastFoodListProps> = ({ fastFoodItems }) => {
  let delay = 0.1;

  return (
    <div className="row">
      {fastFoodItems.map((fastFood) => {
        delay += 0.03;
        return (
          <div className="col-md-4 col-sm-6 mb-grid-gutter" key={fastFood.id}>
            <FastFoodItem {...fastFood} delay={delay} />
          </div>
        );
      })}
    </div>
  );
};

export default FastFoodList;
