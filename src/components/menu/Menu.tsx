"use client";
import { LinkType } from "@/types/link.types";
import { useRouter } from "next/navigation";

type MenuProps = {
  links: LinkType[];
};
const Menu = ({ links }: MenuProps) => {
  const router = useRouter();
  const onGoToClick = (href: string) => {
    router.push(href);
    router.refresh();
  };

  return (
    <nav className="flex flex-col w-full">
      <ul className="mb-4 w-full ">
        {links &&
          links.map((link, index) => (
            <li
              key={`menu-link-${index}`}
              className="text-2xl w-full hover:bg-pink-300 hover:text-white"
            >
              <div
                onClick={() => onGoToClick(link.href)}
                className="w-full flex p-2 cursor-pointer"
              >
                {link.title}
              </div>
            </li>
          ))}
      </ul>
      <button className="button-primary uppercase font-semibold cursor-pointer">
        Postear
      </button>
    </nav>
  );
};

export default Menu;
