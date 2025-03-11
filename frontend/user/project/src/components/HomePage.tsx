import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import { FeaturedProjects } from "./FeaturedProjects";  // ✅ Correct import


function HomePage() {  // ✅ Change to PascalCase
  return (
    <div>
      <Hero />
      <About />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </div>
  );
}

export default HomePage;
