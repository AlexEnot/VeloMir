import { resourcesLinks, platformLinks, communityLinks } from "../constants";

function FooterSection() {
  return (
    <>
      <footer className=" mt-20 border-t py-10 border-neutral-700">
        <div className="justify-center grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className=" text-md font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    className=" text-neutral-300 hover:text-white"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className=" text-md font-semibold mb-4">Платформа</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className=" text-md font-semibold mb-4">Сообщество</h3>
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSection;
