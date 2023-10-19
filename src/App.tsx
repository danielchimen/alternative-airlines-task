// Components
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import { Features } from '@components/Features';
import { Payments } from '@components/Payments';
import { Explore } from '@components/Explore';
import { Protections } from '@components/Protections';
import { BlogPosts } from '@components/BlogPosts';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Features />
        <Payments />
        <Explore />
        <Protections />
        <BlogPosts />
      </main>
    </>
  );
}

export default App;
