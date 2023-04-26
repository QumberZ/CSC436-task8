import { getLinksLinks } from "../utils/data";
const NonSocialLinks = () => {
  const socialLinks = getLinksLinks(1);

  return (
    <>
      <div className="flex flex-col items-center gap-y-4">
        {socialLinks.map((link) => {
          return (
            <>
              <button className="button">
                <p className=" text-center text-4xl leading-11 align-middle ">
                  {link.title}
                </p>
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default NonSocialLinks;
