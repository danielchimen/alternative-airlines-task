// Images
import articleOneMobile from "@images/blog/article-one-mobile.jpg";
// import articleTwoMobile from "@images/blog/article-two-mobile.jpg";
// import articleThreeMobile from "@images/blog/article-three-mobile.jpg";
// import articleOne from "@images/blog/article-one.jpg";
// import articleTwo from "@images/blog/article-two.jpg";
// import articleThree from "@images/blog/article-three.jpg";

export const BlogPosts = () => {
  return (
    <div className="container mx-auto my-12">
      <h3 className="px-8 text-[#005aa8]">Blog</h3>
      <h4 className="text-primary mt-2 pl-8 text-xl">Alternative adventures</h4>
      <div className="mt-4">
        <div className="overflow-x-auto overflow-y-hidden">
          <div className="ml-8 flex gap-4">
            <a
              href="#"
              className="w-[312px] flex-shrink-0 rounded-2xl bg-white"
              onClick={(e) => e.preventDefault()}
            >
              <img
                src={articleOneMobile}
                alt="article one"
                className="h-[277px] w-full rounded-t-2xl object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h5 className="text-muted text-sm font-light">Destinations</h5>
                <p className="text-primary mt-2 text-lg leading-tight">
                  The most beautiful locations around the world that you...
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
