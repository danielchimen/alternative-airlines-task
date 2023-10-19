export type Protection = {
  name: string;
  icon: string;
};

export const Category = ({ name, icon }: Protection) => {
  return (
    <div className="flex h-[90px] flex-col items-center justify-center rounded-md bg-[#f7f8f9] p-4 text-center font-light leading-[0]">
      <img src={icon} className="inline-block max-w-[32px]" alt={name} />
      <div className="mt-2">
        <span className="text-muted text-sm">{name}</span>
      </div>
    </div>
  );
};
