import { imagePropsType } from "@/types/ImageType";
import Image from "next/image";

const Images = ({ src, alt, width, height }: imagePropsType) => {
  return (
    <div className="flex flex-col gap-4 pt-8">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Images;
