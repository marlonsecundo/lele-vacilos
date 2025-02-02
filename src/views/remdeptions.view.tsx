import VaciloItem from "@/components/vacilos-list/vacilo-item";
import { publicFolder } from "@/consts";
import "../app/globals.css";

interface Props {
  onEvidencia: (evidencias: string[]) => void;
  onBack: () => void;
}
export const Remdeptions: React.FC<Props> = ({ onEvidencia, onBack }) => {
  const redemptions = [
    {
      date: "01/02/2025",
      description: "Finalmente terminou arcane 👍",
      color: "bg-green-600",
    },
  ];

  return (
    <div
      className="absolute w-full h-full z-50 flex flex-col"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", paddingTop: "2rem" }}
    >
      <img
        src={publicFolder + "/lele5.webp"}
        className="w-10 self-center mt-3"
      ></img>

      <ul
        className="overflow-y-scroll  w-full h-full "
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "1rem",
        }}
      >
        {redemptions.reverse().map((v, i) => (
          <div className="h-20" key={i + "askjdisaj"}>
            <VaciloItem
              color={v.color}
              onEvidencia={onEvidencia}
              key={i + "dsf"}
              description={v.description}
              date={v.date}
            ></VaciloItem>
          </div>
        ))}
      </ul>

      <button
        className="absolute  bg-black p-5 "
        style={{ left: "1rem" }}
        onClick={() => onBack()}
      >
        Voltar
      </button>
    </div>
  );
};
