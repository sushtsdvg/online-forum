import Image from "next/image";
import Link from "next/link";
export type headerPropsType = {
  heading: {
    part1: string;
    part2: string;
    part3: string;
  };
  menuItems: {
    item1: string;
    item2: string;
    item3: string;
    item4: string;
    item5: string;
    item6: string;
  };
};

const Header = ({ heading, menuItems }: headerPropsType) => {
  return (
    <div className="bg-[#2b2d38] w-max-[1920px] py-4 px-16">
      <div className="flex justify-between">
        <div className="flex text-4xl font-bold leading-[45.25px]">
          <h1 className="text-[#db2a6b]">{heading.part1}</h1>
          <h1 className="text-[#ffffff]">{heading.part2}</h1>
          <h1 className="text-[#db2a6b]">{heading.part3}</h1>
        </div>
        <div className="justify-items-center pt-2">
          <ul className="flex list-none gap-8 font-poppins">
            <Link
              href="#"
              className="text-sm text-[#FFFFFF] underline underline-offset-8 decoration-[#DB2A6B] decoration-2"
            >
              {menuItems.item1}
            </Link>
            <Link href="#" className="text-sm text-[#ABABAB]">
              {menuItems.item2}
            </Link>
            <Link href="#" className="text-sm text-[#ABABAB]">
              {menuItems.item3}
            </Link>
            <Link href="#" className="text-sm text-[#ABABAB]">
              {menuItems.item4}
            </Link>
            <Link href="#" className="text-sm text-[#ABABAB]">
              {menuItems.item5}
            </Link>
            <Link href="/login" className="text-sm text-[#ABABAB]">
              {menuItems.item6}
            </Link>
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
