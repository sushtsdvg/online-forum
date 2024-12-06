import LoginForm from "@/components/LoginForm";
import Image from "next/image";
const page = () => {
  return (
    <div className="w-full bg-gray-400 flex flex-row p-8">
      <div className="bg-white rounded-l-lg w-[50%]">
        <div className="p-8 inline-flex flex-row gap-2 justify-center items-center sm:pl-2 lg:pl-40">
          <Image
            width={25}
            height={25}
            src="/images/dotwork.png"
            alt="dotwork"
          />
          <p className="text-blue-600 text-sm font-semibold">dotwork</p>
        </div>
        <div className="flex flex-col ">
          <p className="text-black font-semibold text-2xl p-2 flex flex-row justify-center">
            Log in to your Account
          </p>
          <p className="text-gray-400 p-2 text-sm flex flex-row justify-center">
            Welcome back! Select method to login:
          </p>
        </div>
        <div className="flex flex-row justify-center gap-2 p-2">
          <button className="bg-white rounded-lg p-2 border border-gray-400 flex flex-row gap-2">
            <Image
              src="/images/google-color-svgrepo-com.svg"
              alt="google-icon"
              width={20}
              height={10}
            />
            Google
          </button>
          <button className="bg-white rounded-lg p-2 border border-gray-400 flex flex-row gap-2">
            <Image
              src="/images/facebook-3-logo-svgrepo-com.svg"
              alt="facebook-icon"
              width={20}
              height={10}
            />
            Facebook
          </button>
        </div>
        <div className="flex flex-row justify-center">
          <p>or continue with email</p>
        </div>
        <LoginForm />
      </div>
      <div className="bg-[#065ad8] rounded-r-lg w-[50%]">
        <div className="flex flex-col items-center justify-evenly p-12">
          <Image
            width={500}
            height={500}
            src="/images/form-image.png"
            alt="form-image"
          />
          <p className="text-white font-semibold">
            Connect with every application.
          </p>
          <p className="text-[#9bbcee] font-extralight text-sm pt-2">
            Everything you need in an easily customizable dashboard.
          </p>
          <ul className="list-disc text-white inline-flex gap-6 pl-2">
            <li></li>
            <li className="text-gray-400"></li>
            <li className="text-gray-400"></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
