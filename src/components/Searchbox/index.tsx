import { TripTypeButtons } from "./TripTypeButtons";
import { InputField } from "./InputField";

export const Searchbox = () => {
  return (
    <>
      <TripTypeButtons />
      <div className="mt-4">
        <InputField labels={["Where from?"]} value={"London (LON)"} />
      </div>
      <div className="mt-2">
        <InputField labels={["Where to?"]} value={"Sydney (SYD)"} />
      </div>
      <div className="mt-2">
        <InputField
          labels={["Dates", "14 Nights"]}
          value={"Sat 11 Jun - Sat 25 Jun"}
        />
      </div>
      <div className="mt-2">
        <InputField labels={["passengers"]} value={"2 Adults, Any class"} />
      </div>
      <div className="mt-2">
        <button
          className="bg-secondary block min-w-full flex-1 whitespace-nowrap rounded-lg p-4 text-sm text-white"
          type="button"
        >
          Search flights
        </button>
      </div>
    </>
  );
};
