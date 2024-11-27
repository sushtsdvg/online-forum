import Image from "next/image";

const Images = () => {
  return (
    <div className="flex flex-col gap-4 w-[1102px] pt-4">
      <Image
        src={"/images/content.png"}
        alt="image"
        width={1102}
        height={1216}
      />
    </div>
  );
};

export default Images;
