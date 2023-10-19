import { type CarouselItem, Carousel } from "@components/Carousel";

// Images
import sydney from "@images/destinations/sydney.jpg";
import melbourne from "@images/destinations/melbourne.jpg";
import brisbane from "@images/destinations/brisbane.jpg";
import cairns from "@images/destinations/cairns.jpg";
import goldCoast from "@images/destinations/gold-coast.jpg";
import uluru from "@images/destinations/uluru.jpg";

const items: CarouselItem[] = [
  {
    href: "#",
    image: sydney,
    title: "Sydney",
    desc: "Australia",
  },
  {
    href: "#",
    image: melbourne,
    title: "Melbourne",
    desc: "Australia",
  },
  {
    href: "#",
    image: brisbane,
    title: "brisbane",
    desc: "Australia",
  },
  {
    href: "#",
    image: goldCoast,
    title: "Gold Coast",
    desc: "Australia",
  },
  {
    href: "#",
    image: cairns,
    title: "Cairns",
    desc: "Australia",
  },
  {
    href: "#",
    image: uluru,
    title: "uluru",
    desc: "Australia",
  },
];

export const Explore = () => {
  return (
    <div className="container mx-auto mt-12">
      <h3 className="text-primary pl-8 text-xl">Exploring Australia</h3>
      <div className="mt-4">
        <div className="overflow-x-auto overflow-y-hidden">
          <Carousel items={items} />
        </div>
      </div>
    </div>
  );
};
