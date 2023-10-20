import alternativeAirlinesLogo from '@images/logos/alternative-airlines.jpg';
import menuIcon from '@icons/menu.svg';

export const Header = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex items-center justify-between p-8 lg:px-8 lg:py-0">
        <a href="/">
          <img
            src={alternativeAirlinesLogo}
            className="max-w-[110px]"
            alt="Alternative Airlines"
          />
        </a>
        <nav className="ml-10 mr-auto hidden flex-1 lg:block">
          <ul className="flex w-full">
            <li>
              <a
                href="#"
                className="a relative block px-4 py-8 text-muted after:relative after:-top-1 after:ml-1 after:inline-block after:content-['\2304']"
              >
                Book flights
              </a>
            </li>
            <li>
              <a
                href="#"
                className="a relative block px-4 py-8 text-muted after:relative after:-top-1 after:ml-1 after:inline-block after:content-['\2304']"
              >
                Information
              </a>
            </li>
            <li>
              <a
                href="#"
                className="a relative block px-4 py-8 text-muted after:relative after:-top-1 after:ml-1 after:inline-block after:content-['\2304']"
              >
                Help
              </a>
            </li>
            <li>
              <a href="#" className="a relative block px-4 py-8 text-muted">
                Travel Agents
              </a>
            </li>
            <li className="ml-auto justify-end">
              <a href="#" className="a relative block px-4 py-8 text-muted">
                Manage Booking
              </a>
            </li>
          </ul>
        </nav>
        <button className="h-8 w-8 lg:hidden">
          {/* TODO - Create SVG component */}
          <img src={menuIcon} alt="menu icon" />
        </button>
      </div>
    </div>
  );
};
