export const TripTypeButtons = () => {
  return (
    <div className="flex flex-wrap gap-2 text-sm">
      <button
        className="bg-secondary flex-grow whitespace-nowrap rounded-lg p-[10px] text-white"
        type="button"
      >
        Return
      </button>
      <button
        className="flex-grow whitespace-nowrap rounded-lg border-[1px] border-gray-200 bg-white p-[10px] text-gray-500"
        type="button"
      >
        One way
      </button>
      <button
        className="flex-grow whitespace-nowrap rounded-lg border-[1px] border-gray-200 bg-white p-[10px] text-gray-500"
        type="button"
      >
        Multi-city
      </button>
    </div>
  );
};
