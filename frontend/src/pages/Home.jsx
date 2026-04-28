import Hero from "../components/Hero";
import HomeAbout from "../components/HomeAbout";
import FeaturedProperties from "../components/FeaturedProperties";
import FeaturedServices from "../components/FeaturedServices";
import FeaturedAgents from "../components/FeaturedAgents";
import Testimonials from "../components/Testimonials";
import WhyUs from "../components/WhyUs";
import RecentBlogPosts from "../components/RecentBlogPosts";
import CallToAction from "../components/CallToAction";

function App() {
  return (
    <div>
      <main>
        <Hero />
        <HomeAbout />
        <FeaturedProperties />
        <FeaturedServices />
        <FeaturedAgents />
        <Testimonials />
        <WhyUs />
        <RecentBlogPosts />
        <CallToAction />
      </main>
    </div>
  );
}

export default App;