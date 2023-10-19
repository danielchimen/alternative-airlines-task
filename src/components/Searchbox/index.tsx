import { TripTypeButtons } from './TripTypeButtons';
import { ToggleButton } from './ToggleButton';

export const Searchbox = () => {
  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <TripTypeButtons />
        <div className="hidden md:block">
          <ToggleButton />
        </div>
      </div>
      <div className="md:mt-4 md:grid md:grid-cols-2">
        <div className="mt-4 md:relative md:mt-0">
          <div className="cursor-pointer rounded-lg border-[1px] border-gray-200 bg-white p-4 font-light text-gray-500 md:rounded-br-none md:rounded-tr-none md:border-r-0">
            <div className="flex justify-between text-[11px]">
              <span>Where from?</span>
            </div>
            <div className="text-sm text-primary">London (LON)</div>
          </div>
          <button className="absolute right-[-18px] top-[18px] hidden h-9 w-9 rounded-full border-[1px] border-gray-200 bg-white md:block"></button>
        </div>
        <div className="mt-2 md:mt-0">
          <div className="cursor-pointer rounded-lg border-[1px] border-gray-200 bg-white p-4 font-light text-gray-500 md:rounded-bl-none md:rounded-tl-none md:pl-8">
            <div className="flex justify-between text-[11px]">
              <span>Where to?</span>
            </div>
            <div className="text-sm text-primary">Sydney (SYD)</div>
          </div>
        </div>
        <div className="mt-2 md:mr-1">
          <div className="cursor-pointer rounded-lg border-[1px] border-gray-200 bg-white p-4 font-light text-gray-500">
            <div className="flex justify-between text-[11px]">
              <span>Dates</span>
              <span>14 Nights</span>
            </div>
            <div className="text-sm text-primary">Sat 11 Jun - Sat 25 Jun</div>
          </div>
        </div>
        <div className="mt-2 md:ml-1">
          <div className="cursor-pointer rounded-lg border-[1px] border-gray-200 bg-white p-4 font-light text-gray-500">
            <div className="flex justify-between text-[11px]">
              <span>Passengers</span>
            </div>
            <div className="text-sm text-primary">2 Adults, Any class</div>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <button
          className="block min-w-full flex-1 whitespace-nowrap rounded-lg bg-secondary p-4 text-sm text-white"
          type="button"
        >
          Search flights
        </button>
      </div>
    </>
  );
};
