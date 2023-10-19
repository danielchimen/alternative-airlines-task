export const ToggleButton = () => {
  return (
    <div>
      <label className="flex cursor-pointer items-center">
        <span className="text-sm font-light text-muted">
          Direct flights only
        </span>
        <div className="relative ml-2">
          <input type="checkbox" value="" className="peer sr-only"></input>
          <div className="peer h-6 w-11 rounded-full bg-[#bdbfc6] after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-secondary peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none"></div>
        </div>
      </label>
    </div>
  );
};
