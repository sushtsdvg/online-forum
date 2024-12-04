import Image from "next/image";
import Link from "next/link";
export interface headerPropsType {
  heading: [
    {
      part: string;
    },
    {
      part: string;
    },
    {
      part: string;
    }
  ];
  navLinks: [
    {
      title: string;
      path: string;
    },
    {
      title: string;
      path: string;
    },
    {
      title: string;
      path: string;
    },
    {
      title: string;
      path: string;
    },
    {
      title: string;
      path: string;
    },
    {
      title: string;
      path: string;
    }
  ];
}
const Header = ({ heading, navLinks }: headerPropsType) => {
  return (
    <div className="bg-[#2b2d38] w-max-[1920px] py-4 px-16">
      <div className="flex justify-between">
        <div className="flex text-4xl font-bold leading-[45.25px]">
          {heading.map((headingPart) => (
            <h1
              className={
                headingPart.part === heading[1].part
                  ? "text-white"
                  : "text-[#db2a6b]"
              }
              key={headingPart.part}
            >
              {headingPart.part}
            </h1>
          ))}
        </div>
        <div className="justify-items-center pt-2">
          <ul className="flex list-none gap-8 font-poppins pb-2">
            {navLinks.map((link) => (
              <li key={link.title} className="text-sm text-[#ABABAB]">
                <Link
                  href={link.path}
                  passHref
                  className={
                    link.path === navLinks[0].path
                      ? "underline underline-offset-1 decoration-2 decoration-[#DB2A6B]"
                      : ""
                  }
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <button>
              <Image
                src={"/images/Menu.svg"}
                alt="menu-logo"
                width={24}
                height={24}
              />
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
// Use NavLink
// Use Map function
// Use props
