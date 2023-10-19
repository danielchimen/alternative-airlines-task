export type FeatureProps = {
  label: string;
  description: string;
  icon: string;
};

export const Feature = ({ label, description, icon }: FeatureProps) => {
  return (
    <div className="rounded-xl bg-white p-7 text-center md:rounded-2xl">
      <img src={icon} className="inline-block" alt="" />
      <h3 className="mt-6 text-lg text-primary md:text-xl">{label}</h3>
      <p className="mt-2 font-light text-muted">{description}</p>
    </div>
  );
};
