// Images
import affirm from "@images/logos/affirm.png";
import afterpay from "@images/logos/afterpay.png";
import klarna from "@images/logos/klarna.png";
import laybuy from "@images/logos/laybuy.png";

export const Payments = () => {
  return (
    <div className="container mx-auto mt-10 px-8">
      <div className="overflow-hidden rounded-xl bg-white text-center">
        <div className="p-8">
          <h3 className="text-primary text-xl">Buy now, pay later</h3>
          <p className="text-muted mt-4 text-lg font-light">
            Book your flights today and spread the cost over time with one of
            our installment options
          </p>
        </div>
        <div className="relative h-16">
          <img
            src={affirm}
            className="absolute -top-6 left-[60%] max-w-[40px]"
            alt="affirm logo"
          />
          <img
            src={afterpay}
            className="absolute left-[90%] top-0 max-w-[60px]"
            alt="afterpay logo"
          />
          <img
            src={klarna}
            className="absolute -left-[2%] -top-5 max-w-[60px]"
            alt="klarna logo"
          />
          <img
            src={laybuy}
            className="absolute left-[30%] top-3 max-w-[48px]"
            alt="laybuy logo"
          />
        </div>
        <div className="mb-8 mt-4">
          <button
            className="bg-secondary flex-grow whitespace-nowrap rounded-lg p-4 text-sm text-white"
            type="button"
          >
            Browse payment methods
          </button>
        </div>
      </div>
    </div>
  );
};
