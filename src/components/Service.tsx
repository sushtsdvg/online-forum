import Image from "next/image";
export type servicePropsType = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const Service = ({ src, alt, width, height }: servicePropsType) => {
  return (
    <div className="flex pb-10">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Service;
