// Images
import affirm from '@images/logos/affirm.png';
import afterpay from '@images/logos/afterpay.png';
import klarna from '@images/logos/klarna.png';
import laybuy from '@images/logos/laybuy.png';
import mobile from '@images/bnpl-mobile.png';

export const Payments = () => {
  return (
    <div className="container mx-auto mt-10 px-8">
      {/* Mobile */}
      <div className="overflow-hidden rounded-xl bg-white text-center md:hidden">
        <div className="p-8">
          <h3 className="text-xl text-primary">Buy now, pay later</h3>
          <p className="mt-4 text-lg font-light text-muted">
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
            className="flex-grow whitespace-nowrap rounded-lg bg-secondary p-4 text-sm text-white"
            type="button"
          >
            Browse payment methods
          </button>
        </div>
      </div>
      {/* Tablet */}
      <div className="hidden overflow-hidden rounded-2xl bg-white md:block lg:mt-20">
        <div className="flex">
          <div className="w-[440px] p-8 lg:w-1/2">
            <h3 className="text-xl text-primary">Buy now, pay later</h3>
            <p className="mt-4 text-lg font-light text-muted">
              Book your flights today and spread the cost over time with one of
              our installment options
            </p>
            <ul className="mt-8 hidden max-w-md list-inside space-y-4 text-lg text-muted md:block">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-6 w-6 flex-shrink-0 text-success"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Make payments weekly or monthly
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-6 w-6 flex-shrink-0 text-success"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Interest free options
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-6 w-6 flex-shrink-0 text-success"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                Fast approval
              </li>
            </ul>
            <div className="mt-10">
              <button
                className="flex-grow whitespace-nowrap rounded-lg bg-secondary p-4 text-sm text-white"
                type="button"
              >
                Browse payment methods
              </button>
            </div>
          </div>
          <div className="relative flex-1">
            <img
              src={affirm}
              className="absolute left-[60%] top-[70px] max-w-[40px]"
              alt="affirm logo"
            />
            <img
              src={afterpay}
              className="absolute right-[10px] top-[200px] max-w-[60px]"
              alt="afterpay logo"
            />
            <img
              src={klarna}
              className="absolute -left-[55px] bottom-[10px] max-w-[60px]"
              alt="klarna logo"
            />
            <img
              src={laybuy}
              className="absolute left-[20px] top-[93px] max-w-[48px]"
              alt="laybuy logo"
            />
            <img
              src={mobile}
              className="absolute -bottom-[140px] right-[60px] w-[200px] lg:-bottom-[220px] lg:right-[180px] lg:w-[50%]"
              alt="mobile payment methods"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
