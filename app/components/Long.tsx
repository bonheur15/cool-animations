"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";

export default function Long() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [rangeValue, SetRangeValue] = useState(0);
  useMotionValueEvent(scaleX, "change", (latest) => {
    SetRangeValue(Math.round((latest * 100) / 1));
    console.log("Page scroll: ", rangeValue);
  });
  return (
    <>
      <div className="pt-[100px] flex items-center w-[100%] justify-center bg-black">
        <div className="border-[1px] text-white flex justify-between border-[#777777] rounded-[20px] w-[calc(100%_-_80px)] px-[40px] py-[60px]">
          <div className="flex flex-col w-[calc(54%_-_20px)]">
            <div className="font-bold text-3xl">How We Work</div>
            <div className="font-light my-[20px] opacity-[0.7]">
              At StoryStream, were all about making the creative process feel
              like a breeze on a sunny day. We start by diving headfirst into
              your ideas, and then we sprinkle our creative magic like confetti
              at a party.
            </div>
            <div className="font-light text-3xl">
              We keep you in the loop every step of the way because, after all,
              <span className="opacity-[0.6]"> its your show!</span>
            </div>
            <div className="font-light my-[20px] opacity-[0.7]">
              Were the team that turns work into wow and we do it with smiles,
              laughter, and a touch of video wizardry. So, grab your popcorn,
              because this creative journey is going to be a blast!
            </div>
            <div className="font-light opacity-[0.7]">
              Well tap into our creative talents, dust off our brainstorming
              hats, and make sure that the journey from concept to creation is a
              toe-tapping, smile-inducing experience. Together, well create
              video magic thats not only effective but also unforgettable. Ready
              to dance to the beat of your story? Lets get started!
            </div>
          </div>
          <div className="flex flex-col max-h-[100%] w-[calc(40%_-_20px)] justify-center items-center overflow-scroll">
            <motion.img
              style={{ objectPosition: `0px ${rangeValue - 70}px` }}
              className="max-h-[300px] w-[100%] object-cover !rounded-[20px]"
              src={"/long1.jpg"}
            />
            {/* <img /> */}
          </div>
        </div>
      </div>
      <div className="py-[150px] flex items-center w-[100%] justify-center bg-black">
        <div className="border-[1px] text-white flex flex-row-reverse justify-between border-[#777777] rounded-[20px] w-[calc(100%_-_80px)] px-[40px] py-[60px]">
          <div className="flex flex-col w-[calc(54%_-_20px)]">
            <div className="font-bold text-3xl">Why us?</div>
            <div className="font-light my-[20px] opacity-[0.7]">
              People hire us not just because were good at what we do (spoiler:
              we are!), but because we bring the and to every projecte the team
              that believes in making the process as enjoyable as the final
              product.
            </div>
            <div className="font-light mb-[20px] opacity-[0.7]">
              Imagine us as the life of the party, but at work. People choose us
              because we re not your typical suit and tie video crew. Were more
              like your lets roll up our sleeves and make something amazing kind
              of team. We bring that extra spark of excitement to every project.
            </div>
            <div className="font-light text-3xl">
              We re the friendly faces who turn your ideas into
              <span className="opacity-[0.6]"> eye-popping video magic.</span>
            </div>
            <div className="font-light my-[20px] opacity-[0.7]">
              From adding a sprinkle of fun to a dash of creativity, wee got the
              secret sauce that keeps our clients coming back for more. So, why
              hire us? Because were not just your video crew; we re your
              partners in making dreams come true!
            </div>
            <div className="font-light opacity-[0.7]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              autem dolores sit optio esse suscipit dolor neque, dolore
              perferendis totam repudiandae pariatur hic similique voluptatibus
              est voluptatem ea mollitia! Aperiam!
            </div>
          </div>
          <div className="flex flex-col w-[calc(46%_-_20px)] justify-center items-center">
            <motion.img
              style={{ objectPosition: `0px ${rangeValue - 90}px` }}
              className="max-h-[100%] w-[100%] object-cover !rounded-[20px]"
              src={"/long2.jpg"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
