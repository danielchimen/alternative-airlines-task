// Icons
import illness from '@icons/illness.svg';
import weather from '@icons/weather.svg';
import refundable from '@icons/refundable.svg';
import emergency from '@icons/emergency.svg';
import breakdown from '@icons/breakdown.svg';
import more from '@icons/more.svg';

// Components
import { type Protection, Category } from './Category';

const protectionList: Protection[] = [
  {
    name: 'Illness',
    icon: illness,
  },
  {
    name: 'Weather',
    icon: weather,
  },
  {
    name: 'Refundable Booking',
    icon: refundable,
  },
  {
    name: 'Emergency',
    icon: emergency,
  },
  {
    name: 'Mechanical Breakdown',
    icon: breakdown,
  },
  {
    name: 'Plus much much more',
    icon: more,
  },
];

export const Protections = () => {
  return (
    <div className="container mx-auto mt-10 px-8 lg:mt-20">
      <div className="overflow-hidden rounded-xl bg-white text-center md:rounded-2xl lg:flex lg:text-left">
        <div className="hidden flex-1 bg-[url('/src/assets/images/cp-mobile.png')] bg-[length:300px] bg-[center_top_90px] bg-no-repeat text-center transition-all hover:bg-[length:320px] hover:bg-[center_top_80px] lg:block">
          <div className="inline-block rounded-b-lg bg-success px-4 py-2 text-sm text-white">
            <span>Recommended</span>
          </div>
        </div>

        <div className="lg:flex-1">
          <div className="inline-block rounded-b-lg bg-success px-4 py-2 text-sm text-white lg:hidden">
            <span>Recommended</span>
          </div>
          <div className="p-10 lg:p-14">
            <h3 className="text-[22px] text-primary">
              Cancellation protection
            </h3>
            <h4 className="mt-4 text-[17px] font-light text-muted">
              During these uncertain times we recommend adding Cancellation
              protection to your booking
            </h4>
            <div className="mt-10 grid grid-cols-2 gap-2 md:grid-cols-3">
              {protectionList.map((protection) => (
                <Category {...protection} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
