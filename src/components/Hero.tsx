import { Searchbox } from '@components/Searchbox';

// Images
import backgroundImage from '@images/background-image.jpg';
import trustPilot from '@images/trustpilot.png';

export const Hero = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat text-primary"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto p-8">
        <div className="text-center">
          <h1 className="mt-4 text-2xl">
            Search and book flights to Australia
          </h1>
          <h2 className="mt-4 text-lg font-light">
            Buy your flights now and pay later
          </h2>
          <div className="mt-8">
            <img
              src={trustPilot}
              className="inline-block max-w-[110px]"
              alt="trustpilot"
            />
            <p className="mt-2 text-sm">
              TrustScore <strong>4.5</strong> &#124; <strong>6,500</strong>{' '}
              reviews
            </p>
          </div>
        </div>
        <div className="mt-10 rounded-xl bg-white p-4 shadow-[0_0_10px_rgba(0,0,0,.1)] lg:mb-12">
          <Searchbox />
        </div>
      </div>
    </div>
  );
};
