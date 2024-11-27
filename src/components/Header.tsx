import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-[#2b2d38] w-max-[1920px] py-4 px-16">
      <div className="flex justify-between">
        <div className="flex text-4xl font-bold leading-[45.25px]">
          <h1 className="text-[#db2a6b]">Gath</h1>
          <h1 className="text-[#ffffff]">Session</h1>
          <h1 className="text-[#db2a6b]">.</h1>
        </div>
        <div className="justify-items-center pt-2">
          <ul className="flex list-none gap-8">
            <li className="text-sm text-[#FFFFFF] underline underline-offset-8 decoration-[#DB2A6B] decoration-2">
              Home
            </li>
            <li className="text-sm text-[#ABABAB]">Features</li>
            <li className="text-sm text-[#ABABAB]">Blog</li>
            <li className="text-sm text-[#ABABAB]">Contact</li>
            <li className="text-sm text-[#ABABAB]">About Us</li>
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
