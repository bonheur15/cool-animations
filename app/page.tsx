import Image from "next/image";
import Card from "./components/Card";
import Long from "./components/Long";

export default function Home() {
  return (
    <>
      <div className="w-[100%] font-sans  relative h-fit min-h-[100vh] flex flex-col py-[40px] items-center">
        <Image
          className="absolute inset-0 z-0 m-0 w-[100%] h-[100%] object-cover"
          width={"500"}
          height={400}
          alt=""
          src={"/background.webp"}
        />
        <div className="w-fit flex flex-col items-center z-10 text-white text-[36px] font-bold">
          <div className=""> Our Client Chronicles:</div>
          <div>Stories that Make Us Smile!</div>
        </div>
        <div className="pt-[40px] w-[100%] flex justify-center ">
          <Card />
        </div>
      </div>
      <Long />
    </>
  );
}
