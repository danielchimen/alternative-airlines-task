// Icons
import illness from "@icons/illness.svg";
import weather from "@icons/weather.svg";
import refundable from "@icons/refundable.svg";
import emergency from "@icons/emergency.svg";
import breakdown from "@icons/breakdown.svg";
import more from "@icons/more.svg";

// Components
import { type Protection, Category } from "./Category";

const protectionList: Protection[] = [
  {
    name: "Illness",
    icon: illness,
  },
  {
    name: "Weather",
    icon: weather,
  },
  {
    name: "Refundable Booking",
    icon: refundable,
  },
  {
    name: "Emergency",
    icon: emergency,
  },
  {
    name: "Mechanical Breakdown",
    icon: breakdown,
  },
  {
    name: "Plus much much more",
    icon: more,
  },
];

export const Protections = () => {
  return (
    <div className="container mx-auto mt-10 px-8">
      <div className="overflow-hidden rounded-xl bg-white text-center">
        <div className="bg-success inline-block rounded-b-lg px-4 py-2 text-sm text-white">
          Recommended
        </div>
        <div className="p-10">
          <h3 className="text-primary text-[22px]">Cancellation protection</h3>
          <h4 className="text-muted mt-4 text-[17px] font-light">
            During these uncertain times we recommend adding Cancellation
            protection to your booking
          </h4>
          <div className="mt-10 grid grid-cols-2 gap-2">
            {protectionList.map((protection) => (
              <Category {...protection} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
