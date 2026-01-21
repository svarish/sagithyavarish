// import Hero from "../components/Hero";

// export default function Home() {
//   return <Hero />;
//   <Projects />
// }
import Hero from "../components/Hero";
// import Projects from "../components/projects";
import Projects from "@/components/projects";

export default function HomePage() {
  return (
    <div className="page">
      <Hero />
      <Projects />
    </div>

  
  );
}