import { HeaderProps } from "@/types/HeaderType";
import Image from "next/image";
const Header = ({ heading, menuItems }: HeaderProps) => {
  return (
    <div className="bg-[#2b2d38] w-max-[1920px] py-4 px-16">
      <div className="flex justify-between">
        <div className="flex text-4xl font-bold leading-[45.25px]">
          <h1 className="text-[#db2a6b]">{heading[0]}</h1>
          <h1 className="text-[#ffffff]">{heading[1]}</h1>
          <h1 className="text-[#db2a6b]">{heading[2]}</h1>
        </div>
        <div className="justify-items-center pt-2">
          <ul className="flex list-none gap-8 font-poppins">
            <li className="text-sm text-[#FFFFFF] underline underline-offset-8 decoration-[#DB2A6B] decoration-2">
              {menuItems[0]}
            </li>
            <li className="text-sm text-[#ABABAB]">{menuItems[1]}</li>
            <li className="text-sm text-[#ABABAB]">{menuItems[2]}</li>
            <li className="text-sm text-[#ABABAB]">{menuItems[3]}</li>
            <li className="text-sm text-[#ABABAB]">{menuItems[4]}</li>
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
