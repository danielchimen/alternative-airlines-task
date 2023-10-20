import { type FeatureProps, Feature } from './Feature';

// Icons
import search from '@icons/search.svg';
import choice from '@icons/choice.svg';
import service from '@icons/service.svg';

const FeatureList: FeatureProps[] = [
  {
    label: 'Simple search',
    description: 'Easily search and book flights from anywhere in the world',
    icon: search,
  },
  {
    label: 'Unlimited choice',
    description: 'Find the flight you were looking for and pay your terms',
    icon: choice,
  },
  {
    label: 'Expert customer service',
    description: 'Dedicated customer support team once you have booked',
    icon: service,
  },
];

export const Features = () => {
  return (
    <div className="container mx-auto mt-8 flex flex-col gap-4 px-8 text-primary lg:mt-20 lg:flex-row lg:gap-8">
      {FeatureList.map((feature) => (
        <Feature {...feature} />
      ))}
    </div>
  );
};
