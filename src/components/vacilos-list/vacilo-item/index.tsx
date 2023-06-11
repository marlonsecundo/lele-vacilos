import React from "react";

interface Props {
  imageSrc?: string;

  description: string;
}

import "./styles.css";

const VaciloItem: React.FC<Props> = ({ description, imageSrc }) => {
  return (
    <div className="item-container">
      {imageSrc && <img src="" />}
      <p className="item-description">{description}</p>
    </div>
  );
};

export default VaciloItem;
