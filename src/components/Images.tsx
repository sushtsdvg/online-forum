import Image from "next/image";
export type imagePropsType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const Images = ({ src, alt, width, height }: imagePropsType) => {
  return (
    <div className="flex flex-col gap-4 pt-8">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Images;
