import React from "react";

interface Props {
  imageSrc?: string;
  description: string;
  date?: string;
  evidencias?: string[];
  onEvidencia: (evidencias: string[]) => void;
}

import "./styles.css";

const VaciloItem: React.FC<Props> = ({
  description,
  imageSrc,
  date,
  evidencias,
  onEvidencia,
}) => {
  return (
    <div className="item-container bg-white bg-opacity-20">
      {date && <p>{date}</p>}
      {imageSrc && <img src="" />}
      <p className="font-semibold item-description">{description}</p>

      {evidencias ? (
        <div
          className={evidencias ? "cursor-pointer" : ""}
          onClick={() => onEvidencia(evidencias ?? [])}
        >
          <div className="bg-white mt-5 p-1 rounded-sm flex justify-center items-center">
            <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-400 to-cyan-500">
              EVIDENCIAS
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default VaciloItem;
