import alternativeAirlinesLogo from "@images/logos/alternative-airlines.jpg";
import menuIcon from "@icons/menu.svg";

export const Header = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto flex items-center justify-between p-8">
        <a href="/">
          <img
            src={alternativeAirlinesLogo}
            className="max-w-[110px]"
            alt="Alternative Airlines"
          />
        </a>
        <button className="h-8 w-8">
          {/* TODO - Create SVG component */}
          <img src={menuIcon} alt="menu icon" />
        </button>
      </div>
    </div>
  );
};
