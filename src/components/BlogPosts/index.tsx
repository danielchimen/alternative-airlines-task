import { type CategoryItem, Category } from './Category';

// Images
import articleOneMobile from '@images/blog/article-one-mobile.jpg';
import articleTwoMobile from '@images/blog/article-two-mobile.jpg';
import articleThreeMobile from '@images/blog/article-three-mobile.jpg';
import articleOne from '@images/blog/article-one.jpg';
import articleTwo from '@images/blog/article-two.jpg';
import articleThree from '@images/blog/article-three.jpg';

const categories: CategoryItem[] = [
  {
    name: 'Destinations',
    desc: "The most beautiful locations around the world that you don't want to miss",
    image: articleOneMobile,
    largeImage: articleOne,
  },
  {
    name: 'Destinations',
    desc: "The most beautiful locations around the world that you don't want to miss",
    image: articleTwoMobile,
    largeImage: articleTwo,
  },
  {
    name: 'Destinations',
    desc: "The most beautiful locations around the world that you don't want to miss",
    image: articleThreeMobile,
    largeImage: articleThree,
  },
];

export const BlogPosts = () => {
  return (
    <div className="container mx-auto my-12">
      <h3 className="px-8 text-[#005aa8] md:text-center">Blog</h3>
      <h4 className="mt-2 pl-8 text-xl text-primary md:text-center">
        Alternative adventures
      </h4>
      <div className="mt-4">
        <div className="overflow-x-auto overflow-y-hidden">
          <div className="ml-8 flex gap-4">
            {categories.map((category, index) => (
              <Category key={index} {...category} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
