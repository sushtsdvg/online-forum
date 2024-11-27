import Image from "next/image";

const Title = () => {
  return (
    <div className="flex flex-col pt-6">
      <div className="flex flex-col gap-8">
        <p className="text-[#FFFFFF] text-[80px] font-bold w-[784px] h-[303px] flex flex-col">
          Build your best community starting from here.
        </p>
        <p className="text-[#ABABAB] font-[400] text-2xl leading-[40px] font-poppins py-8 flex flex-col">
          Meet and communicate with the best people to run projects, events or
          other activities in a more effective and fun way
        </p>
      </div>
      <div className="flex gap-6 w-fit">
        <button className="bg-[#DB2A6B] rounded-2xl text-[#FFFFFF] font-poppins text-lg font-normal p-4 rounded-bl-none px-[4.5rem]">
          Get Started
        </button>
        <button className="flex gap-2 w-[148px] h-[40px] font-poppins pt-2">
          <p className="text-[#FFFFFF] underline underline-offset-1 decoration-white leading-6 w-[102px] pt-2">
            Learn More
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
