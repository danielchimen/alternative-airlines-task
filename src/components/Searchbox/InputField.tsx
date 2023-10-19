export type InputFieldProps = {
  labels: string[];
  value: string;
};

export const InputField = ({ labels, value }: InputFieldProps) => {
  return (
    <div className="cursor-pointer rounded-lg border-[1px] border-gray-200 bg-white p-4 font-light text-gray-500">
      <div className="flex justify-between text-[11px]">
        {labels.map((label) => (
          <span> {label} </span>
        ))}
      </div>
      <div className="text-primary text-sm">{value}</div>
    </div>
  );
};
