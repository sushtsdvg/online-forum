import { TitleType } from "@/types/TitleType";
import Image from "next/image";
const Title = ({ heading, subheading, button }: TitleType) => {
  return (
    <div className="flex flex-col pt-6 gap-6">
      <div className="flex flex-col gap-6">
        <p className="text-white text-7xl leading-extra-loose font-bold flex flex-col">
          {heading}
        </p>
        <p className="text-[#ABABAB] text-2xl leading-[40px] font-poppins py-3 flex flex-col gap-8">
          {subheading}
        </p>
      </div>
      <div className="flex gap-6 w-fit">
        <button className="bg-[#DB2A6B] rounded-2xl text-white font-poppins text-lg font-normal p-4 rounded-bl-none px-[4.5rem]">
          {button[0].buttonText}
        </button>
        <button className="flex gap-2 font-poppins pt-2">
          <p className="text-white underline underline-offset-1 decoration-white leading-6 pt-2">
            {button[1].buttonText}
          </p>
          <Image
            src="/images/Arrow (1).png"
            alt="arrow"
            width={40}
            height={40}
          />
        </button>
      </div>
    </div>
  );
};

export default Title;
