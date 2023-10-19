export type CategoryItem = {
  name: string;
  desc: string;
  image: string;
  largeImage: string;
};

export const Category = (props: CategoryItem) => {
  const { name, desc, image, largeImage } = props;

  return (
    <a
      href="#"
      className="w-[312px] flex-shrink-0 rounded-2xl bg-white md:relative md:w-[704px]"
      onClick={(e) => e.preventDefault()}
    >
      <img
        src={image}
        alt="article one"
        className="h-[277px] w-full rounded-t-2xl object-cover md:hidden"
        loading="lazy"
      />
      <img
        src={largeImage}
        alt="article one"
        className="hidden h-[402px] w-full rounded-2xl object-cover md:block"
        loading="lazy"
      />
      <div className="top-0 p-6 md:absolute md:flex md:h-full md:w-[400px] md:flex-col md:p-12">
        <h5 className="text-sm font-light text-muted md:text-white">{name}</h5>
        <p className="mt-2 text-lg leading-tight text-primary md:flex-1 md:text-xl md:text-white">
          {desc}
        </p>
        <div className="hidden md:inline-block">
          <button className="rounded-2xl border border-white px-4 py-3 text-white">
            Read blog article
          </button>
        </div>
      </div>
    </a>
  );
};
