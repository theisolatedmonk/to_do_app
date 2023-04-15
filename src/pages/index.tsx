import { Card } from "@/components/Card";
import checkIcon from "@/images/icon-check.svg";
import { TiTick } from "react-icons/ti";
import  moonImage from "@/images/icon-moon.svg";
import Image from "next/image";
import crossImage from "@/images/icon-cross.svg";

export default function Todo() {
  return (
    <main className="flex bg-no-repeat  bg-top bg-[url('../images/bg-desktop-light.jpg')] min-h-screen flex-col items-center justify-center">
      <div className=" items-center gap-3 flex flex-col text-sm lg:flex">
        <div className="flex justify-between   w-96 h-12 items-center p-1 ">
          <div className=" font-bold  text-white text-2xl">TODO</div>
          <div>
            <Image src={moonImage} alt="" />
          </div>
        </div>
        <div className=" flex flex-col gap-4	">
          <div className="flex justify-between">
            <div className="flex gap-5 pl-2 items-center border border-black bg-white w-96 h-10 rounded-sm">
              <div className="rounded-full shadow-md bg-gradilinear-gradient hsl(192,100%,67%) to hsl(280,87%,65%)">
                {" "}
                <TiTick className="text-black text-xl " />
              </div>
              <input
                type="text"
                className=" h-full w-full    outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-0"> 
            <div className="flex">
            <div className="flex gap-2 p-2 items-center border border-black bg-white w-96 h-10 rounded-sm">
              <div className="rounded-full gap-2 shadow-md">
                {" "}
                <TiTick className="text-black text-xl" />
              </div>
              <div className=" h-full w-full  outline-none">
                task 1
              </div>
              <div className="">
              <Image src={crossImage} alt="" />
              </div>
            </div>
            </div>
            <div className="flex gap-2 justify-between p-2 text-xs items-center border border-black bg-white w-96 h-10 rounded-sm ">
              <div className="">5item left</div>
              <div className=" flex gap-3 ">
                <div>All</div>
                <div>Active</div>
                <div>Completed</div>
              </div>
              <div>Clear Completed</div>
            </div>
          </div>
        </div>
        <div className=" text-xs">Drag and drop to reader list</div>
      </div>
    </main>
  );
}
