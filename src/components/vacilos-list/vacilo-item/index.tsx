import React from "react";

interface Props {
  imageSrc?: string;
  description: string;
  date?: string;
}

import "./styles.css";

const VaciloItem: React.FC<Props> = ({ description, imageSrc, date }) => {
  return (
    <div className="item-container">
      {date && <p>{date}</p>}
      {imageSrc && <img src="" />}
      <p className="item-description">{description}</p>
    </div>
  );
};

export default VaciloItem;
