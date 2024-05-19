"use client";
export default function Card() {
  return (
    <>
      <div className="w-[90%] card relative overflow-hidden slide-anim  h-fit backdrop-blur-md border-[1px] group border-solid border-[#ffffff49] bg-[#ffffff13] py-[60px] px-[40px] rounded-[40px]">
        <div className="w-[90px] rectangle absolute h-[150%]  backdrop-blur-md my-auto z-10 bg-[#ffffff23] inset-0 mx-0"></div>
        <div className="w-fit flex gap-[5px] items-center z-0">
          <div className="relative">
            <div className="text-[30px] animate-bounce">🙂</div>
            <div className="w-[30px] emoji-shadow bg-[radial-gradient(black,_transparent)] h-[10px]   absolute bottom-[-5px] left-0 right-0 mx-auto rounded-[100%]"></div>
          </div>
          <span className="text-white font-bold text-[20px] font-mono">
            Logoipsum
          </span>
        </div>
        <div className="py-[20px]  font-semibold text-[white] z-0 text-[40px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          magnam nam vitae pariatur quidem eos repudiandae perspiciatis cum
          alias, itaque voluptate incidunt dolore atque! Omnis ipsam quibusdam
          laboriosam incidunt quo.
        </div>
      </div>
    </>
  );
}
