import { servicePropsType } from "@/types/ServiceType";
import Image from "next/image";

const Service = ({ src, alt, width, height }: servicePropsType) => {
  return (
    <div className="flex pb-10">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Service;
