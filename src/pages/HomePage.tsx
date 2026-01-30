import { Hero } from "@/components/Hero";
import { Map } from "@/components/Map";
import { OrganizationalStructure } from "@/components/OrganizationalStructure";
import { Partners } from "@/components/Partners";
import { Quality } from "@/components/Quality";
import { VisionValues } from "@/components/VisionValues";
import { WorkedProjects } from "@/components/worked-projects";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <VisionValues />
      <Quality />
      <OrganizationalStructure />
      <WorkedProjects />
      <Partners />
      <Map />
    </main>
  );
}
