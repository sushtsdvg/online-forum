import Images from "@/components/Images";
import Service from "@/components/Service";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#2b2d38] w-max-[1920px] h-max-[1080px] pl-16">
      <div className="flex">
        <Title />
        <Images />
      </div>
      <Service />
    </div>
  );
}
