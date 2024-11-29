import Images from "@/components/Images";
import Service from "@/components/Service";
import Title from "@/components/Title";
import { imagePropsType } from "@/types/ImageType";
import { servicePropsType } from "@/types/ServiceType";
import { TitleType } from "@/types/TitleType";

const getTitleData = (): TitleType => {
  return {
    heading: "Build your best community starting from here.",
    subheading:
      "Meet and communicate with the best people to run projects, events or other activities in a more effective and fun way",
    button: [
      {
        buttonText: "Get Started",
      },
      {
        buttonText: "Learn more",
      },
    ],
  };
};

const getImageData = (): imagePropsType => {
  return {
    src: "/images/content 2.png",
    alt: "image",
    width: 1800,
    height: 2300,
  };
};

const getServiceData = (): servicePropsType => {
  return {
    src: "/images/service.png",
    alt: "service",
    width: 616,
    height: 64,
  };
};

export default function Home() {
  const titleData = getTitleData();
  const imageData = getImageData();
  const serviceData = getServiceData();

  return (
    <div className="flex bg-[#2b2d38] justify-between pl-16 gap-2">
      <div className="flex flex-col gap-12">
        <Title
          heading={titleData.heading}
          subheading={titleData.subheading}
          button={titleData.button}
        />
        <Service
          src={serviceData.src}
          alt={serviceData.alt}
          width={serviceData.width}
          height={serviceData.height}
        />
      </div>
      <Images
        src={imageData.src}
        alt={imageData.alt}
        width={imageData.width}
        height={imageData.height}
      />
    </div>
  );
}
