import { FC } from "react";

interface ILoadingProps {
  theme?: string;
}

const Loading: FC<ILoadingProps> = ({ theme }) => {
  return <div className="d-flex justify-content-center m-auto">
    <div className={`loading spinner-border text-${theme || "success"}`}>

    </div>
  </div>;
};

export default Loading;
