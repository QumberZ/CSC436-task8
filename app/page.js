import TopContent from "../components/TopContent";
import SocialLinks from "../components/SocialLinks";
import NonSocialLinks from "../components/NonSocialLinks";

export default async function Home() {
  return (
    <>
      <main className="flex grid grid-rows-2 justify-items-center">
        <TopContent />
      </main>

      <main className="flex grid grid-rows-2 justify-items-center">
        <SocialLinks />
        <NonSocialLinks />
      </main>
    </>
  );
}
