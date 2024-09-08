import { publicFolder } from "@/consts";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

interface Props {
  evidencias: string[];
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ evidencias, onClose }) => {
  return (
    <div
      className={
        "absolute w-screen h-screen z-50 flex justify-center items-center  flex-col " +
        (evidencias.length > 0 ? "" : "hidden")
      }
    >
      <div
        className="absolute bg-black w-full h-full opacity-80"
        onClick={() => onClose()}
      ></div>

      <div className="z-20 flex flex-col justify-center items-center">
        <h3 className="text-white opacity-100 text-4xl mb-4 ">Evidencias</h3>

        <Carousel className="" dynamicHeight={true}>
          {evidencias.map((j) => (
            <div key={j}>
              <img
                className="object-contain"
                style={{ maxHeight: "500px" }}
                src={publicFolder + "/evidencias/" + j}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
