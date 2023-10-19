export type FeatureProps = {
  label: string;
  description: string;
  icon: string;
};

export const Feature = ({ label, description, icon }: FeatureProps) => {
  return (
    <div className="rounded-xl bg-white p-7 text-center">
      <img src={icon} className="inline-block" alt="" />
      <h3 className="text-primary mt-6 text-lg">{label}</h3>
      <p className="text-muted mt-2 font-light">{description}</p>
    </div>
  );
};
