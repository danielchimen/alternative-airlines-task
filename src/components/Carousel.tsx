export type CarouselItem = {
  href: string;
  image: string;
  title: string;
  desc: string;
};

export type CarouselProps = {
  items: CarouselItem[];
};

export const Carousel = ({ items }: CarouselProps) => {
  return (
    <div className="ml-8 flex gap-4">
      {items.map((item, index) => (
        <a
          href={item.href}
          key={index}
          className="w-[312px] flex-shrink-0 rounded-2xl bg-white"
          onClick={(e) => e.preventDefault()}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-[277px] w-full rounded-t-2xl object-cover"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="text-primary text-lg">{item.title}</h3>
            <p className="text-muted">{item.desc}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
